const mongoose = require('mongoose');
const Collections = require('../mongo');
const TodoSchema =  require('../todo/todoSchema');

class TodoCollection extends Collections {
    constructor() {
        super('todo',TodoSchema);
    }

//using async/await class methods here!
    async create(object) {
        let newTodo = new this.model({
            name: object.name,
            category: object.category,
            display_name: object.display_name,
            description: object.description

        });
       return await newTodo.save();


    }
}

module.exports = TodoCollection;
