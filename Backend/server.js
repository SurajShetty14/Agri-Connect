const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(
  cors({
    origin: "https://agri-connect-ym23.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.get("/sample", (req, res) => {
  res.send("hello");
});
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
