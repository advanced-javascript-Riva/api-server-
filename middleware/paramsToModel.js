'use strict';

const CategoryCollection = require('../model/categories/categoriesCollections');
const MovieCollection = require('../model/movies/movieCollection');
const PerfumeCollection = require('../model/perfumes/perfumesCollection');
const ProductsCollection = require('../model/products/productsCollections');
const TodoCollection = require('../model/todo/todoCollection');
const UserCollection = require('../model/user/userCollection');
const validateUser = require('../middleware/validateUser');

module.exports = async function (req, res, next){
    console.log('checking params to model', req.params.model);
    switch (req.params.model) {
    case 'categories':
        req.model = new CategoryCollection();
        break;
    case 'products':
        req.model = new ProductsCollection();
        break;
    case 'todos':
        req.model = new TodoCollection();
        break;
    case 'movies':
        req.model = new MovieCollection();
        break;
    case 'perfumes': 
        req.model = new PerfumeCollection();
        break;
    case 'user':
        req.validators = validateUser;
        req.model = new UserCollection();
        break;
    default:
      res.status(404).send('Unknown model type');
    return;
   }
   console.log('success grabbing model', req.model);
   next();
}

