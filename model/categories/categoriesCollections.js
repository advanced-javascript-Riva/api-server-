'use strict'


const CategoriesModel = require('./categoriesModel')

class Collections {
 constructor() {
    this.model = CategoriesModel;
 }

//using async/await class methods here!
   async create(object) {
      // console.log(`Added note: ${args.payload}`);
      let newCategory = new this.model({
         category: object.category,
         name: object.name,
         display_name: object.display_name,
         description: object.description

      });
      return await (newCategory.save())

   }

   //read() performs a find()
   async read() {
      const allCategories = await this.model.find();
      return allCategories;
   }

   async update(id) {
      const record =  await this.model.findByIdAndUpdate(id, req.body);
      if (record === null) {
         return null;
      }
      // record.overwrite(data);
      // //after we update the doc we want to save it
      await record.save();
      return record;
   }

   async delete(id) {
      const record =  await this.model.findByIdAndDelete(id);
      if (record === null) {
         return null;
      }
   }

}

module.exports = Collections;




