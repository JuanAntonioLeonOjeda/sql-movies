const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const User = sequelize.define('user', {
  userName: {
    type: DataTypes.STRING
  }
})