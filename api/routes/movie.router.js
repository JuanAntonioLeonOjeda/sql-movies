const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

const {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  assignAwards,
  deleteMovie
} = require('../controllers/movie.controller')

router
  .get('/', checkAuth, getAllMovies)
  .get('/:id', checkAuth, getOneMovie)
  .post('/', checkAuth, checkRole, createMovie)
  .put('/:id', checkAuth, checkRole, updateMovie)
  .put('/:id/awards', checkAuth, checkRole, assignAwards)
  .delete('/:id', checkAuth, checkRole, deleteMovie)

module.exports = router