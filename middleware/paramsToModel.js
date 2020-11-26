'use strict';

const CategoryCollection = require('../model/categories/categoriesCollections');
const ProductsCollection = require('../model/products/productsCollections');
const TodoCollection = require('../model/todo/todoCollection');

module.exports = function (req, res, next){
    switch (req.params.model) {
        case 'categories':
            req.model = new CategoryCollection();
            break;
        case 'products':
            req.model = new ProductsCollection();
            break;
        case 'todos':
            req.model = new TodoCollection();
        default:
            res.status(404).send('Unknown model type');
            return;
    }
    next();
}
