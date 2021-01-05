const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
        category: String,
        name: String,
        display_name: String,
        // date.now will be default value
        description: String
});

 module.exports = CategoriesSchema;

