const mongoose = require('mongoose');

const PerfumeSchema = new mongoose.Schema({
  id: String,
  title: String,
  price: [Number],
  size: [String],
  category:String,
  type: String,
  description: String
});

module.exports = PerfumeSchema;
