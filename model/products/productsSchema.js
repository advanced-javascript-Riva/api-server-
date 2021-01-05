const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
        category: String,
        name: String,
        display_name: String,
        description: String
});

module.exports = ProductsSchema;