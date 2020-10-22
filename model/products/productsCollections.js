'use strict';

const ProductsModel = require('./productsModel');

class ProductsCollection {
    constructor() {
        this.model = ProductsModel;
    }

    async create(object) {
        // console.log(`Added note: ${args.payload}`);
        let newProduct = new this.model({
            category: object.category,
            name: object.name,
            display_name: object.display_name,
            description: object.description

        });
        await newProduct.save()

    }


    //read() performs a find()
    async read() {
        const allProducts = await this.model.find();
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
        return productRecord;
    }

}

module.exports = ProductsCollection;