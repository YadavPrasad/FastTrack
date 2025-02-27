const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Order = require('./models/loginSchema');

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/Order")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

  app.post('/track-order', async (req, res) => {
    const { orderID } = req.body;
  
    if (!orderID) {
      return res.status(400).json({ message: 'OrderID is required.' });
    }
  
    try {
      const order = await Order.findOne({ orderID });
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found.' });
      }
  
      res.status(200).json({ message: 'Order found!', order });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
