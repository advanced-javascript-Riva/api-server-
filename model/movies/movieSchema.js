const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
        id: String,
        poster: String,
        title: String,
        vote_average: Number,
        overview: String,
        release_date: String
})

module.exports = MovieSchema;