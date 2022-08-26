const { DataTypes } = require ('sequelize')
const sequelize = require ('../../index')

const Genre = sequelize.define('genre', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  } 
})



module.exports = Genre