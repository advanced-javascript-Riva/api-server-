'use strict'

const express = require('express');
const app = express();
let router = express.Router();
const port = process.env.PORT || 3001;
const morgan = require('morgan');
let cors = require('cors');

app.use(cors());
app.use(express.json());
require('dotenv').config();
app.use(router);
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

const logger = require('../middleware/logger');
const timeStamp = require('../middleware/timestamp');
const notFoundError = require('../middleware/404');
const serverError = require('../middleware/500');

// Importing Routes for categories and products:
const collectionsRouter = require('./routes/api');
router.use(collectionsRouter);

// Loading middleware
router.use(logger);
router.use(timeStamp);
router.use(serverError);
router.use(notFoundError);

module.exports = {
    app: app,
    start: function () {
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    }
}


