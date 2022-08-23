const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, checkRole, require('../controllers/genre.controller').getAllGenres)
  .get('/:id', checkAuth, checkRole, require('../controllers/genre.controller').getOneGenre)
  .post('/', checkAuth, checkRole, require('../controllers/genre.controller').createGenre)
  .put('/:id', checkAuth, checkRole, require('../controllers/genre.controller').updateGenre)
  .delete('/:id', checkAuth, checkRole, require('../controllers/genre.controller').deleteGenre)

module.exports = router