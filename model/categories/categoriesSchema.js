const mongoose = require('mongoose');


//Create a schema structure
const CategoriesSchema = new mongoose.Schema({
       // When this is stored, each obj in array will be key value pair
        // The key will be the index and the value will be the string
        category: String,
        name: String,
        display_name: String,
        //date.now will be default value
        description: String

    });

 module.exports = CategoriesSchema;

