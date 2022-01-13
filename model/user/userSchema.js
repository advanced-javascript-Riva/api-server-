const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username : {
    type:String,
    minLength:6,
    maxLength:25,
    required: true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type:String,
    minLength:10,
    required:true
  }
});

module.exports = UserSchema;