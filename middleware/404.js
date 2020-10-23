'use strict';

module.exports = function (err,req, res, next) {
    //log the exception
    res.status(404)
    res.send({
       error: 'Not Found'
    })
}
