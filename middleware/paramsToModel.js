'use strict';

const CategoryCollection = require('../model/categories/categoriesCollections');
const ProductsCollection = require('../model/products/productsCollections');



module.exports = function (req, res, next){
    switch (req.params.model) {
        case 'categories':
            req.model = new CategoryCollection();
            break;
        case 'products':
            req.model = new ProductsCollection();
            break;
        default:
            res.status(404).send('Unknown model type');
            return;
    }
    next();
}
