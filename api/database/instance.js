const { Sequelize } = require('sequelize')

function DB() {
  this.sequelize = new Sequelize(`mysql://root:5gd2c1hc5dF1b4gDG1hhA4ha6F-GFCgf@viaduct.proxy.rlwy.net:49001/railway`)
  console.log('> Connected to DB!')
}

const db_instance = new DB

module.exports = db_instance.sequelize