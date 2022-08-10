const sequelize = require ('./api/database')

;(async function () {
  try {
    await sequelize.authenticate()
    console.log('Connected to DB!')
  } catch (error) {
    console.error(error)
  }
}) ()