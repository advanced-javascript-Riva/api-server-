'use strict'

const mongoose = require('mongoose');
const ProductsSchema = require('./productsSchema');


const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;