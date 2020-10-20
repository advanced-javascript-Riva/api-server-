'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const app = ('express');
const PORT = process.env.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(PORT, () => {
    console.log('JSON server is up and running!')
});

app.get('/', (req, res) => {

})
//  Middleware: A function that executes when routes are being hit
// app.use('posts', () => {
// console.log('this is a middleware function for posts route ')
// });
// //packages can be used with middleware

//load supertest module
//require express
//npm install mongoose
//use compass and atlas
//get URI string, do not use localhost
//import mongoose package
//create .env file in VS code
//install dotenv
//in .env file(create it) add DB_CONNECTION: add string URI string
//create PORT in .env
//require dotenv package() with 'dotenv config'
//Now I can change URI STRING
//connect to db with mongoose.connect and add in URI to .env file
//install nodemon
// use newURL parser to true and other parser from notes lab
//create folder called routes
//add in route files and require express on each one
// call const router = express.Router();
//Now I can use router to create router
// router.get, router.post, etc...
//export the router module.exports = router;
// Import routes in app.js:
     //const PostRoute = require('./routes/posts) for example
     // create middleware = app.use('/posts', postRoute)
     // NOW, In posts.js under routes don't have to use postroute,
         //so I can change it to just a './' route
//If I want to add more routes, I just:
           /* router.get('/specific', (req, res)=> {
               res.send("we are on specific post")
           })*/
           // now again, I can just say app.use('/use', userRoute)
/*In other words, just create route, export router and bring it
           into app.js and use it as a middleware*/
