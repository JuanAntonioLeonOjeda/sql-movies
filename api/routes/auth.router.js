const router = require ('express').Router()

const {
  signup
} = require('../controllers/auth.controller')

router
  .post('/signup', signup)
  //.post('/login', login)

module.exports = router