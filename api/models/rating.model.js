const { DataTypes } = require('sequelize')
const sequelize = require ('../../index')

const Rating = sequelize.define('rating', {
  score: {
    type: DataTypes.FLOAT,
    allowNull: false,
    min: 0,
    max: 10
  }
})

module.exports = Rating