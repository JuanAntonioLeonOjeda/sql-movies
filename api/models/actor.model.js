const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const Actor = sequelize.define('actor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Actor