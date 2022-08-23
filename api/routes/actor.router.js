const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, require ('../controllers/actor.controller').getAllActors)
  .get('/:id', checkAuth, require ('../controllers/actor.controller').getOneActor)
  .post('/', checkAuth, checkRole, require ('../controllers/actor.controller').createActor)
  .put('/:id', checkAuth, checkRole, require ('../controllers/actor.controller').updateActor)
  .put('/:id/movie', checkAuth, checkRole, require ('../controllers/actor.controller').addMovie)
  .delete('/:id', checkAuth, checkRole, require ('../controllers/actor.controller').deleteActor)

module.exports = router