var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
  name: String,
  type: String,
  sound: String
});

mongoose.model('Animal', AnimalSchema);
module.exports = mongoose.model('Animal');
