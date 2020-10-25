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
const collectionsRouter = require('./routes/api');
router.use(collectionsRouter);
// router.use('/categories', categoriesRouter);
//localhost:3001/categories


//loading middleware

router.use(logger);
router.use(timeStamp);
router.use(serverError);
router.use(notFoundError);


module.exports = {

    app: app,
    start: function () {

        //connect to server;
        /*give it a port number and optionally pass a function to call when app
        starts listening on given port*/
        app.listen(port, () => console.log(`Listening on port ${port}...`));

    }
}


