const mongoose = require('mongoose');
const Collections = require('../mongo');
const TodoSchema =  require('../todo/todoSchema');

class TodoCollection extends Collections {
    constructor() {
        super('Todos',TodoSchema);
    }

//using async/await class methods here!
    async create(object) {
        let newTodo = new this.model({
            assignee: object.assignee,
            description: object.description,
            completed: object.completed,
            difficulty: object.difficulty
        });
        
       return await newTodo.save();
    }
}

module.exports = TodoCollection;
