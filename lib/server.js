'use strict'
require('dotenv').config();;
const express = require('express');
const app = express()
const port = process.env.PORT || 5000;;
app.use(express.json);


//Importing Routes for categories and products:

// const categoryRouter = require('./routes/categories.js');
// app.use('/categoryRouter', categoryRouter);
// const productRouter = require('/routes/products')
// app.use('/productRouter', productRouter);






    module.exports = {
        server: app,
        start: function () {

    //connect to server;
    /*give it a port number and optionally pass a function to call when app
    starts listening on given port*/
    app.listen(port, () => console.log(`Listening on port ${port}...`));

    }
}