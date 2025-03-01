const mdb = require('mongoose');

const userSchema = mdb.Schema({
  Username : {type : String, require: true, unique : true},
  password : {type : String, require : true}
  });
  
const user_schema = mdb.model('user', userSchema);
module.exports = user_schema;  