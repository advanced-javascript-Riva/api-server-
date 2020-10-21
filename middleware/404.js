'use strict';

module.exports = function(req, res, next) {
    //log the exception
    res.status(404).send('Not Found');
};