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
const notFoundError = require('../middleware/404');
const serverError = require('../middleware/500');


//Importing Routes for categories and products:
const categoriesRouter = require('./routes/categories');
router.use(categoriesRouter);
// router.use('/categories', categoriesRouter);
//localhost:3001/categories

const productsRouter = require('./routes/products.js')
router.use('/products', productsRouter);
//localhost:3001/products


//loading middleware


router.use(logger);
// console.log('timestamp', timeStamp);
router.use(timeStamp);
router.use(serverError);
router.use(notFoundError);


router.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
//using express handler
//if 404 is not handled, then error should be passed into below handler
router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

router.use((req, res, next, err) => {

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


