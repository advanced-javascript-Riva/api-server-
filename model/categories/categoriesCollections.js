'use strict'


const CategoriesModel = require('./categoriesModel')

class Collections {
 constructor(model) {
    this.model = model;
 }



   async create(object) {
      // console.log(`Added note: ${args.payload}`);
      let newCategory = new this.Model({

         name: object.name,
         display_name: object.display_name,
         description: object.description

      });
      await newCategory.save()

   }



}







module.exports = Collections;




