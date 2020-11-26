const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
        item: String,
        assignee: String,
        description: String,
})

module.exports = TodoSchema;