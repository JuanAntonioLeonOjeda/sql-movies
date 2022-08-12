const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Actor = require ('./actor.model')
const Rating = require ('./rating.model')

const Movie = sequelize.define('movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  synopsis: {
    type: DataTypes.STRING,
  }
})

Movie.hasMany(Rating)
Rating.belongsTo(Movie)

Movie.belongsToMany(Actor, { through: 'Movie_Actor' })
Actor.belongsToMany(Movie, { through: 'Movie_Actor' })

module.exports = Movie