'use strict';

const Collections = require('../mongo');
const ProductsSchema = require('./productsSchema');
/** ProductsCollection now has all props of Collections*/
class ProductsCollection extends Collections {
    constructor() {
        super('Products',ProductsSchema);
    }

//using async/await class methods here!
    async create(object) {
        let newProduct = new this.model({
            name: object.name,
            category: object.category,
            display_name: object.display_name,
            description: object.description

        });
       return await newProduct.save();


    }
}

module.exports = ProductsCollection;