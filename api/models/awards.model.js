const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Awards = sequelize.define('awards', {
  oscars: {
    type: DataTypes.INTEGER
  },
  goldenGlobes: {
    type: DataTypes.INTEGER
  }
})

module.exports = Awards