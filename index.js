'use strict';

// const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
const CategoriesSchema = require('./model/categories/categoriesSchema');
const ProductsSchema = require('./model/products/productsSchema');

const server = require('./lib/server.js');
server.start();
console.log(server);

//Connect to Database
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));




