'use strict'


class Collections {
     /**constructor accepts a schema and model name as args when creating an instance,
      * and this is used in the methods to operate on the mongoose schema
     * @param modelName is string name of collection the model is for
     * @param schema is the mongoose Schema object
     */
 constructor(modelName,schema) {
    this.model = mongoose.model(modelName, schema);
 }
//create() method is different for each model as schema is slightly different
   //read() performs a find()
   async read(id) {
       console.log('Mongo read method', id);
      const allEntries= await this.model.find({_id: id});
      return allEntries;
   }

   async update(id, body) {
       console.log('Mongo update method', id);
      const entry =  await this.model.findByIdAndUpdate(id, body);
      if (entry === null) {
         return null;
      }

      // //after we update the doc we want to save it
      await entry.save();
      return entry;
   }

   async delete(id) {
       console.log('Mongo delete method', id);
      const entry =  await this.model.findByIdAndDelete(id);
      if ( entry === null) {
         return null;
      }
   }

}

module.exports = Collections;




