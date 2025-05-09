// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());


// Set __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the uploads folder path
const uploadsDir = path.join(__dirname, "uploads");

// Check if the uploads folder exists, if not, create it
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log("Uploads folder created at:", uploadsDir);
}

// Serve static files from the "uploads" folder
app.use("/uploads", express.static(uploadsDir));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

/* ============================
   User Schema and Routes
============================ */

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// **Signup Route**
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// **Login Route**
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Both fields are required" });

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// **Protected Route Example**
app.get("/api/auth/protected", (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Access granted", userId: decoded.id });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});

/* ============================
   Project Schema and Upload Route
============================ */

// Define Project Schema
const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z]{2}\d{2}$/,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    upiId: {
      type: String,
      required: true,
    }
  },
  fundingGoal: {
    type: Number,
    required: true,
    default: 10000
  },
  amountRaised: {
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Save files in the "uploads" folder
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Use timestamp + original file extension as the filename
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// **Project Upload Route**
app.post("/api/projects/upload", upload.single("image"), async (req, res) => {
  console.log("Received project upload request");
  console.log("Request body:", req.body);
  console.log("Request file:", req.file);

  try {
    const { projectId, name, details, email, phone, upiId, fundingGoal } = req.body;

    // Validate required fields
    if (!projectId || !name || !details || !email || !phone || !upiId || !fundingGoal) {
      console.log("Validation failed: Missing required fields");
      return res.status(400).json({
        message: "All fields are required",
        receivedFields: {
          projectId: !!projectId,
          name: !!name,
          details: !!details,
          email: !!email,
          phone: !!phone,
          upiId: !!upiId,
          fundingGoal: !!fundingGoal
        }
      });
    }

    // Validate projectId format
    const regex = /^[A-Z]{2}\d{2}$/;
    if (!regex.test(projectId)) {
      console.log("Validation failed: Invalid project ID format");
      return res.status(400).json({
        message: "Invalid project ID format. It should be two uppercase letters followed by two digits.",
        receivedId: projectId
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format");
      return res.status(400).json({
        message: "Invalid email format",
        receivedEmail: email
      });
    }

    // Validate phone number
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      console.log("Validation failed: Invalid phone format");
      return res.status(400).json({
        message: "Invalid phone number format",
        receivedPhone: phone
      });
    }

    // Validate UPI ID
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/;
    if (!upiRegex.test(upiId)) {
      console.log("Validation failed: Invalid UPI ID format");
      return res.status(400).json({
        message: "Invalid UPI ID format",
        receivedUpiId: upiId
      });
    }

    // Check if projectId already exists
    console.log("Checking for existing project with ID:", projectId);
    const existingProject = await Project.findOne({ projectId });
    if (existingProject) {
      console.log("Project ID already exists:", projectId);
      return res.status(400).json({
        message: "Project ID already exists. Please use a different ID.",
        existingProjectId: projectId
      });
    }

    // Validate image
    if (!req.file) {
      console.log("Validation failed: No image file received");
      return res.status(400).json({
        message: "Project image is required"
      });
    }

    console.log("Creating new project with data:", {
      projectId,
      name,
      details,
      email,
      phone,
      upiId,
      fundingGoal,
      image: req.file.filename
    });

    // Create new project
    const newProject = new Project({
      projectId,
      name,
      details,
      image: req.file.filename,
      contact: { email, phone, upiId },
      fundingGoal: Number(fundingGoal) || 10000,
      amountRaised: 0
    });

    console.log("Saving new project to database...");
    await newProject.save();
    console.log("Project saved successfully:", newProject);
    
    res.status(201).json({ 
      message: "Project uploaded successfully", 
      project: newProject 
    });
  } catch (error) {
    console.error("Error in project upload route:", error);
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      console.log("Duplicate key error:", error);
      return res.status(400).json({ 
        message: "Project ID already exists. Please use a different ID.",
        error: error.message
      });
    }
    
    res.status(500).json({ 
      message: "Error uploading project", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Error fetching projects", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
