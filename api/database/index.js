const { Sequelize } = require('sequelize')

function DB() {
  this.sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false
  })
  console.log('> Connected to DB!')

  this.sequelize.sync().then(() => {
    require('../database/relationships')
    console.log('> Database models synchronized')
  })
}

const db_instance = new DB
module.exports = db_instance.sequelize