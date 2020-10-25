'use strict';

const categoriesModel = require('../model/categories/categoriesModel');
const productsModel = require('../model/products/productsModel');


module.exports = function (req, res, next){
    switch (req.params.model) {
        case 'categories':
            res.model = categoriesModel;
            break;
        case 'products':
            res.model = productsModel;
            break;
        default:
            res.status(404).send('Unknown mdoel type');
            return;
    }
    next();
}
