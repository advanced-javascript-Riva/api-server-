'use strict';

const timeStamp = ((req, res, next) => {
    const now = new Date();
    req.requestTime = now.toString();
    console.log(req.requestTime);
    next();
});

module.exports = timeStamp;