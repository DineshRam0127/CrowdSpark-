const express = require('express');
const multer = require('multer');
const path = require('path');
const Project = require('../models/Project');

const router = express.Router();

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// GET all projects
router.get('/getproject', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects', error: err.message });
  }
});

// POST route for uploading a new project
router.post('/upload', upload.single('image'), async (req, res) => {
  const { projectId, name, details, email, phone, upiId, fundingGoal } = req.body;

  const regex = /^[A-Z]{2}\d{2}$/;
  if (!regex.test(projectId)) {
    return res.status(400).json({ 
      message: 'Invalid project ID format. It should be two uppercase letters followed by two digits.' 
    });
  }
  
  try {
    const newProject = new Project({
      projectId,
      name,
      details,
      image: req.file.filename,
      contact: {
        email,
        phone,
        upiId
      },
      fundingGoal: fundingGoal || 10000,
      amountRaised: 0
    });
    
    await newProject.save();
    res.status(201).json({ 
      message: 'Project uploaded successfully', 
      project: newProject 
    });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error uploading project', 
      error: err.message 
    });
  }
});

module.exports = router;