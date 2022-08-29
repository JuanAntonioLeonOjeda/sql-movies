const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Ratings', {
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
      min: 0,
      max: 10
    }
  })
}