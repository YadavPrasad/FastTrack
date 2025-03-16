const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  currentLocation: { lat: Number, lng: Number },
  destination: { lat: Number, lng: Number },
  status: { type: String, required: true }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
