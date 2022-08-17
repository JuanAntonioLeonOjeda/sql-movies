const router = require ('express').Router()

const {
  getAllGenres,
  getOneGenre,
  createGenre,
  updateGenre,
  deleteGenre
} = require ('../controllers/genre.controller')

router
  .get('/', getAllGenres)
  .get('/:id', getOneGenre)
  .post('/', createGenre)
  .put('/:id', updateGenre)
  .delete('/:id', deleteGenre)

module.exports = router