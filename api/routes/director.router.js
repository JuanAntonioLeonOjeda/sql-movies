const router = require ('express').Router()

const {
  createDirector
} = require('../controllers/director.controller')

router
  .post('/', createDirector)

module.exports = router