const mongoose = require('mongoose');

//Connect to Database
mongoose.connect('mongodb://localhost/playground')
            //better to use debug module rather than console.log
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));


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
const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = CategoriesSchema;