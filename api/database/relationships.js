const User = require('../models/user.model')
const Movie = require('../models/movie.model')
const Actor = require('../models/actor.model')
const Director = require('../models/director.model')
const Genre = require('../models/genre.model')
const Rating = require('../models/rating.model')
const Awards = require('../models/awards.model')

Movie.hasOne(Awards)
Awards.belongsTo(Movie)

Director.hasMany(Movie)
Movie.belongsTo(Director)

Genre.hasMany(Movie)
Movie.belongsTo(Genre)

Movie.hasMany(Rating)
Rating.belongsTo(Movie)

User.hasMany(Rating)
Rating.belongsTo(User)

Movie.belongsToMany(User, { through: 'FavMovies' })
User.belongsToMany(Movie, { through: 'FavMovies' })

Movie.belongsToMany(Actor, { through: 'Movie_Actor' })
Actor.belongsToMany(Movie, { through: 'Movie_Actor' })



