'use strict'

const CategoriesSchema = require('./categoriesSchema');
const Collections = require('../mongo');

class CategoryCollection extends Collections {
  constructor() {
   super('Categories',CategoriesSchema);
  }

  async create(object) {
    let newCategory = new this.model({
      name: object.name,
      display_name: object.display_name,
      description: object.description
    });
    return await newCategory.save()
  };
};

module.exports = CategoryCollection;




