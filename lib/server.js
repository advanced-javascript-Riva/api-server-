'use strict'

const express = require('express');
const app = express()
let router = express.Router()
const port = process.env.PORT || 3001;
app.use(express.json());
require('dotenv').config();


app.use(router);
const logger = require('../middleware/logger');
const timeStamp = require('../middleware/timestamp');

//loading middleware
router.use(logger);
console.log('timestamp', timeStamp);
router.use(timeStamp);


//Importing Routes for categories and products:
const categoriesRouter = require('./routes/categories');
router.use(categoriesRouter);
// router.use('/categories', categoriesRouter);
//localhost:3001/categories

const productsRouter = require('./routes/products.js')
router.use('/products', productsRouter);
//localhost:3001/products

const notFoundError = require('../middleware/404');
const serverError = require('../middleware/500');


app.use(notFoundError);
router.use(serverError);


router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = {

    server: app,
    start: function () {

        //connect to server;
        /*give it a port number and optionally pass a function to call when app
        starts listening on given port*/
        app.listen(port, () => console.log(`Listening on port ${port}...`));

    }
}


