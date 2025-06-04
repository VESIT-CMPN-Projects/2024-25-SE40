const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

// GET all testimonials
router.get("/", async (req, res) => {
  try {
    const data = await Testimonial.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create testimonial
router.post("/", async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    const saved = await testimonial.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
