'use strict';

const timeStamp = ((req, res, next)=> {
    const now = new Date();
    //this timestamps the request and then formats like a regular date
    req.requestTime = now.toString();
    console.log(req.requestTime);
    next();
});

module.exports = timeStamp;