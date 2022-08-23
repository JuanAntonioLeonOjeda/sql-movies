const router = require ('express').Router()

router
  .post('/signup', require('../controllers/auth.controller').signup)
  .post('/login', require('../controllers/auth.controller').login)

module.exports = router