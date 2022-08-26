const { DataTypes } = require ('sequelize')
const sequelize = require ('../../index')

const Director = sequelize.define('director', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Director