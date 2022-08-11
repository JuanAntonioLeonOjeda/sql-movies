process.stdout.write('\x1B[2J\x1B[0f')

const express = require ('express')
const cors = require ('cors')
const morgan = require ('morgan')
const sequelize = require ('./api/database')

;(async function () {
  try {
    await sequelize.sync({ alter: true })
    console.log('Connected to DB!')
  } catch (error) {
    console.error(error)
  }
}) ()

const app = express()

try {
  app
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require ('.api/routes'))
} catch (error) {
  console.error(error)
}