'use strict';

const ProductsModel = require('./productsModel');

class ProductsCollection {
    constructor() {
        this.model = ProductsModel;
    }

//using async/await class methods here!
    async create(object) {
        console.log('What is this object', object);
        // console.log(`Added note: ${args.payload}`);
        let newProduct = new this.model({
            name: object.name,
            display_name: object.display_name,
            description: object.description

        });
        console.log('creating product', newProduct);
       return await newProduct.save();


    }


    //read() performs a find()
    async read(id) {
        const allProducts = await this.model.find(id);
        return allProducts;
    }


    async update(id) {
        const productRecord = await this.model.findByIdAndUpdate(id, req.body);
        if (productRecord === null) {
            return null;
        }
        // record.overwrite(data);
        // //after we update the doc we want to save it
        await productRecord.save();
         return productRecord;
    }

    async delete(id) {
        const productRecord = await this.model.findByIdAndDelete(id);
        if (productRecord === null) {
            return null;
        }
       productRecord;
    }

}

module.exports = ProductsCollection;