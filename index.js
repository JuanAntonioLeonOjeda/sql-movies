const sequelize = require ('./api/database')

;(async function () {
  try {
    await sequelize.sync({ alter: true })
    console.log('Connected to DB!')
  } catch (error) {
    console.error(error)
  }
}) ()