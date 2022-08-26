const { DataTypes } = require ('sequelize')
const sequelize = require ('../../index')

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

module.exports = Movie