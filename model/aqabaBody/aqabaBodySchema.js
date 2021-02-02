const mongoose = require('mongoose');

const BodySchema = new mongoose.Schema({
        id: String,
        title: String,
        price: Number,
        size: String,
        description: String
})

module.exports = BodySchema;