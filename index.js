'use strict';

// const jsonServer = require('json-server');
//const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();



// server.use(middleware);
// server.use(router);

const server = require('./lib/server.js');
server.start();
const mongoose = require('mongoose');


//Connect to Database
mongoose.connect('mongodb://localhost/playground')
            //better to use debug module rather than console.log
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));






