'use strict';

// const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
const CategoriesSchema = require('./model/categories/categoriesSchema');
const ProductsSchema = require('./model/products/productsSchema');

const server = require('./lib/server.js');
server.start();

//Connect to Database
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));


// const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



