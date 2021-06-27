
const Collections = require('../mongo');
const MovieSchema =  require('../movies/movieSchema');

class MovieCollection extends Collections {
  constructor() {
    super('Movies',MovieSchema);
  }
  async create(object) {
    console.log('creating movie', object);
    let newMovie= new this.model({
      id: object.id,
      poster: object.poster,
      title: object.title,
      vote_average: object.vote_average,
      overview: object.overview,
      release_date:object.release_date
    });
    console.log('saving movie')
    return await newMovie.save();
  };
};

module.exports = MovieCollection;