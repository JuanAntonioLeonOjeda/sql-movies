const { DataTypes } = require ('sequelize')

module.exports = (sequelize) => {
  sequelize.define('actor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}