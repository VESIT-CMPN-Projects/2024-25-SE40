const express = require("express");
const router = express.Router();
const parser = require("../middleware/multer");

// Upload image to Cloudinary
router.post("/image", parser.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path });
});

module.exports = router;
