const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Movie = require ('./movie.model')

const Director = sequelize.define('director', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Director.hasMany(Movie)
Movie.belongsTo(Director)

module.exports = Director