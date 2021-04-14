const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  assignee: String,
  description: String,
  completed: Boolean,
  difficulty: Number
})

module.exports = TodoSchema;