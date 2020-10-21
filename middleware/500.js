'use strict';

module.exports = function(err,req, res, next) {
    next()
    res.status(500).send('Internal server error');
};