const router = require ('express').Router()

const {
  createMovie
} = require('../controllers/movie.controller')

router
  .post('/', createMovie)

module.exports = router