'use strict'
const mongoose = require('mongoose');
const CategoriesSchema = require('./categoriesSchema');


const Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories;