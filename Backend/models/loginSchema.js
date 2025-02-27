const mdb = require('mongoose');

const orderSchema = mdb.Schema({
    orderID: String,
    customerName: String,
    status: String,
  });
  
const order_schema = mdb.model('Order', orderSchema);
module.exports = order_schema; 