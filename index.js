process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const db = require('./api/database').sequelize

db.sync().then(() => {
  require('./api/database/relationships')
  console.log('> Database models synchronized')

  const app = express()
  app
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use('/api', require('./api/routes'))
  
  .listen(process.env.PORT, () => {
    console.log(`> Listening on port: ${process.env.PORT}`)
  })
})

module.exports = db
