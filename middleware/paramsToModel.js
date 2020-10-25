'use strict';

const categoriesModel = require('../model/categories/categoriesModel');
const productsModel = require('../model/products/productsModel');


module.exports = function (req, res, next){
    switch (req.params.model) {
        case 'categories':
            req.model = categoriesModel;
            break;
        case 'products':
            req.model = productsModel;
            break;
        default:
            req.status(404).send('Unknown model type');
            return;
    }
    next();
}
