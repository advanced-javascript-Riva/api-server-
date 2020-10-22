'use strict';

module.exports = function(req, res, next) {
    res.status(500).send('Internal server error');
};