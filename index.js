'use strict';

// const jsonServer = require('json-server');
//const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();



// server.use(middleware);
// server.use(router);

const server = require('./lib/server.js');
server.start();


// app.use('post', () => {
// console.log('this is a middleware function for post ')
// });




// Import routes from routes.js:
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

