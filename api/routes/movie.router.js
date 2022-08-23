const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, require('../controllers/movie.controller').getAllMovies)
  .get('/:id', checkAuth, require('../controllers/movie.controller').getOneMovie)
  .post('/', checkAuth, checkRole, require('../controllers/movie.controller').createMovie)
  .put('/:id', checkAuth, checkRole, require('../controllers/movie.controller').updateMovie)
  .put('/:id/awards', checkAuth, checkRole, require('../controllers/movie.controller').assignAwards)
  .delete('/:id', checkAuth, checkRole, require('../controllers/movie.controller').deleteMovie)

module.exports = router