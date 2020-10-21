'use strict'
require('dotenv').config();;
const express = require('express');
const app = express()
const port = process.env.PORT || 4000;
app.use(express.json());
const logger = require('../middleware/logger')


//loading middleware
app.use(logger);




//Importing Routes for categories and products:
const categoriesRouter = require('../routes/categories');
app.use('/categories', categoriesRouter);
//localhost:3001/subscribers

const productsRouter = require('../routes/products.js')
app.use('/products', productsRouter);
//localhost:3001/products






    module.exports = {
        server: app,
        start: function () {

    //connect to server;
    /*give it a port number and optionally pass a function to call when app
    starts listening on given port*/
    app.listen(port, () => console.log(`Listening on port ${port}...`));

    }
}