process.stdout.write('\x1B[2J\x1B[0f')
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const sequelize = require('./api/database')
const relations = require ('./api/database/relations')

sequelize.authenticate().then(async () => {
  console.log('> Database models synchronized')

  await relations (sequelize)
  await sequelize.sync()

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


