
const Collections = require('../mongo');
const PerfumeSchema =  require('./perfumesSchema');

class PerfumeCollection extends Collections {
    constructor() {
        super('Perfumes', PerfumeSchema);
    }
    async create(object) {
        let newPerfume = new this.model({
            id: object.id,
            title: object.title,
            price: object.price,
            size: object.size,
            category:object.category,
            type: object.type,
            description:object.description
        });
       return await newPerfume.save();
    };
};

module.exports = PerfumeCollection;