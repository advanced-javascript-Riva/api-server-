'use strict'
require('dotenv').config();

const express = require('express');
const app = express()
let router = express.Router()
const port = process.env.PORT || 4000;
app.use(express.json());
const logger = require('../middleware/logger');
const timeStamp = require('../middleware/timestamp');
const notFoundError = require('../middleware/404');
const serverError = require('../middleware/500');

TODO:
//I have passed err as first arg is error handling and for some reason it didn't work yesterday
//Figure out why I can't use logger.use without errors


//loading middleware
router.use(logger);
router.use(timeStamp);
router.use(notFoundError);
router.use(serverError);


//Importing Routes for categories and products:
const categoriesRouter = require('./routes/categories');
router.use('/categories', categoriesRouter);
//localhost:3001/subscribers

const productsRouter = require('./routes/products.js')
router.use('/products', productsRouter);
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