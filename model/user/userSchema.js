const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  id: String
});

module.exports = UserSchema;