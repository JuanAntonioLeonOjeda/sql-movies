const router = require ('express').Router()

const {
  createRating
} = require('../controllers/rating.controller')

router
  .post('/', createRating)

module.exports = router