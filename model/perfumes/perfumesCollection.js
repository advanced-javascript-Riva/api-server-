
const Collections = require('../mongo');
const PerfumesSchema =  require('../perfumes/PerfumesSchema');

class PerfumesCollection extends Collections {
    constructor() {
        super('Perfumes',PerfumesSchema);
    }
    async create(object) {
        let newPerfume = new this.model({
            id: object.id,
            perfume_title: object.perfume_title,
            price: object.price,
            size: object.size,
            type: object.type,
            description:object.description
        });
       return await newPerfume.save();
    };
};

module.exports = PerfumesCollection;