const express = require("express");
const Product = require("../models/Product");
const upload = require("../config/multer");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/",
  authMiddleware(["farmer"]),
  upload.single("image"),
  async (req, res) => {
    const { name, price, description, quantity, farmerId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required." });
    }

    const imageUrl = req.file.path.replace(/\\/g, "/");

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
      console.error("Error creating product:", err);
      res.status(500).json({ message: "Error saving product." });
    }
  }
);

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products." });
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product." });
  }
});

// Update a product by ID
router.put(
  "/:id",
  authMiddleware(["farmer"]),
  upload.single("image"),
  async (req, res) => {
    const { name, price, description, quantity } = req.body;
    const updateData = { name, price, description, quantity };

    if (req.file) {
      updateData.imageUrl = req.file.path.replace(/\\/g, "/");
    }

    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          new: true,
        }
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.json({
        message: "Product updated successfully",
        product,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(500).json({ message: "Error updating product." });
    }
  }
);

// Delete a product by ID
router.delete("/:id", authMiddleware(["farmer"]), async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Error deleting product." });
  }
});

// Filter products
router.get("/filter", async (req, res) => {
  const { minPrice, maxPrice, available } = req.query;
  const filters = {};

  if (minPrice) {
    filters.price = { $gte: Number(minPrice) };
  }
  if (maxPrice) {
    filters.price = { ...filters.price, $lte: Number(maxPrice) };
  }
  if (available !== undefined) {
    filters.quantity = available === "true" ? { $gt: 0 } : { $eq: 0 };
  }

  try {
    const products = await Product.find(filters);
    res.json(products);
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).json({ message: "Error filtering products." });
  }
});

module.exports = router;
