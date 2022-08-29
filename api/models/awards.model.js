const { DataTypes } = require ('sequelize')

module.exports = (sequelize) => {
  sequelize.define('awards', {
    oscars: {
      type: DataTypes.INTEGER
    },
    goldenGlobes: {
      type: DataTypes.INTEGER
    }
  })
}