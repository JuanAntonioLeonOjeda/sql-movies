const router = require ('express').Router()

const {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movie.controller')

router
  .get('/', getAllMovies)
  .get('/:id', getOneMovie)
  .post('/', createMovie)
  .put('/:id', updateMovie)
  .delete('/:id', deleteMovie)

module.exports = router