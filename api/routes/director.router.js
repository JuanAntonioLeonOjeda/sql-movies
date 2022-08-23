const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, require('../controllers/director.controller').getAllDirectors)
  .get('/:id',checkAuth, require('../controllers/director.controller').getOneDirector)
  .post('/', checkAuth, checkRole, require('../controllers/director.controller').createDirector)
  .put('/:id', checkAuth, checkRole, require('../controllers/director.controller').updateDirector)
  .delete('/:id', checkAuth, checkRole, require('../controllers/director.controller').deleteDirector)

module.exports = router