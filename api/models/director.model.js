const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Director = sequelize.define('director', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Director