const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, price, description, quantity, farmerId } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      description,
      quantity,
      farmerId,
    });

    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
