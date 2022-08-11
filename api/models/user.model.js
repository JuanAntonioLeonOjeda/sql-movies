const { DataTypes } = require ('sequelize')
const sequelize = require ('../database')

const {
  is18
} = require ('../utils')

const User = sequelize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user'
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      checkAge (value) {
        if (!is18(value)) {
          throw new Error ('User must be at least 18 years old')
        }
      }
    }
  }
})

module.exports = User