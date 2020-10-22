'use strict'

const CategoriesSchema = require('./categoriesSchema');
const CategoriesModel = require('./categoriesModel')

class Collections {
 constructor(CategoriesSchema) {
    this.CategoriesSchema = CategoriesSchema;
 }

}
async read(id) {
      const allProducts = await ProductsModel.find();
        res.json(allProducts);
        //This error means I did something wrong!
        //Error on the server, did not have anything to do with user
        res.status(500).res.json( {message: err.message})
    }

