'use strict';

module.exports = function(req, res, next) {
    //log the exception
    res.status(500).send('Internal server error');
};