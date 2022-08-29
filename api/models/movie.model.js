const { DataTypes } = require ('sequelize')

module.exports = (sequelize) => {
  sequelize.define('movie', {
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
}