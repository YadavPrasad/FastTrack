const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/UsersSchema");
const Order = require("./models/OrdersSchema");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT =  process.env.PORT;

app.post("/signup", async (req, res) => {
  try {
    const { Username, password } = req.body;
    const existingUser = await User.findOne({ Username });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ Username, password: hashedPassword });
    await newUser.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { Username, password } = req.body;
    const user = await User.findOne({ Username });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful", Username });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

app.post("/order", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: "Order creation failed" });
  }
});

app.get("/orders/:username", async (req, res) => {
  try {
    const orders = await Order.find({ username: req.params.username });
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch orders" });
  }
});

app.get("/order/:orderID", async (req, res) => {
  try {
    const order = await Order.findOne({ orderID: req.params.orderID });
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error fetching order" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
