const mongoose = require('mongoose');

const PerfumesSchema = new mongoose.Schema({
        id: String,
        perfume_title: String,
        price: Number,
        size: String,
        type: String,
        description: String
})

module.exports = PerfumesSchema;