const router = require ('express').Router()

const {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  assignAwards,
  deleteMovie
} = require('../controllers/movie.controller')

router
  .get('/', getAllMovies)
  .get('/:id', getOneMovie)
  .post('/', createMovie)
  .put('/:id', updateMovie)
  .put('/:id/awards', assignAwards)
  .delete('/:id', deleteMovie)

module.exports = router