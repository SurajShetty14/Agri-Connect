const express = require("express");
const Product = require("../models/Product");
const upload = require("../config/multer");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
  const { name, price, description, quantity, farmerId } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: "Image is required." });
  }

  const imageUrl = req.file.path;

  try {
    const product = new Product({
      name,
      price,
      description,
      quantity,
      imageUrl,
      farmerId,
    });

    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
