const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: String,
  comment: String,
  designation: String,
  experience: {
    quality: Number, // Rating 1-5
    service: Number, // Rating 1-5
    communication: Number, // Rating 1-5
    punctuality: Number, // Rating 1-5
  },
});

module.exports = mongoose.model("Testimonial", testimonialSchema);
