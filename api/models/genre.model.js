const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Movie = require ('./movie.model')

const Genre = sequelize.define('genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  } 
})

Genre.hasMany(Movie)
Movie.belongsTo(Genre)

module.exports = Genre