const router = require ('express').Router()

const {
  createGenre
} = require ('../controllers/genre.controller')

router
  .post('/', createGenre)

module.exports = router