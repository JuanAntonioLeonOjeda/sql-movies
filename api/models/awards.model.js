const { DataTypes } = require ('sequelize')
const sequelize = require ('../../index')

const Awards = sequelize.define('awards', {
  oscars: {
    type: DataTypes.INTEGER
  },
  goldenGlobes: {
    type: DataTypes.INTEGER
  }
})

module.exports = Awards