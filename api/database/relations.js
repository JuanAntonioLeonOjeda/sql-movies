function relations (sequelize) {
  const {
    actor,
    awards,
    director,
    genre,
    movie,
    user
  } = sequelize.models
  
  movie.hasOne(awards)
  awards.belongsTo(movie)

  director.hasMany(movie)
  movie.belongsTo(director)
  
  genre.hasMany(movie)
  movie.belongsTo(genre)
  
  movie.belongsToMany(user, { through: 'FavMovies' })
  user.belongsToMany(movie, { through: 'FavMovies' })
  
  movie.belongsToMany(actor, { through: 'Movie_Actor' })
  actor.belongsToMany(movie, { through: 'Movie_Actor' })
  
  movie.belongsToMany(user, { through: 'Ratings' })
  user.belongsToMany(movie, { through: 'Ratings' })
  
  console.log('> Relations defined')
}

module.exports = relations



