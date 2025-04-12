// orderRoutes.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { productId, productName, price, date } = req.body;
  console.log("Order Received:", req.body);
  res.status(200).json({ message: "Order saved successfully" });
});

module.exports = router;
