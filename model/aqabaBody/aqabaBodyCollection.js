const Collections = require('../mongo');
const BodySchema =  require('../aqabaBody/aqabaBodySchema');

class BodyProductsCollection extends Collections {
  constructor() {
    super('Body', BodySchema);
  }
  
  async create(object) {
    let newBodyProduct = new this.model({
      id: object.id,
      title: object.title,
      price: object.price,
      size: object.size,
      description:object.description
    });
    return await newBodyProduct.save();
  };
};

module.exports = BodyProductsCollection;