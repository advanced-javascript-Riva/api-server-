'use strict';

module.exports = function (req, res, next){
console.log('middleware found model' + req.params.model);
res.model = req.params.model;
next();
}
