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
    upiId: {  // Add this field
      type: String,
      required: true,
    },
  },
  fundingGoal: {  // Add these new fields
    type: Number,
    default: 10000,
  },
  amountRaised: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });