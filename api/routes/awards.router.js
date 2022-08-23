const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, checkRole, require ('../controllers/awards.controller').getAllAwards)
  .get('/:id', checkAuth, checkRole, require ('../controllers/awards.controller').getOneAward)
  .post('/', checkAuth, checkRole, require ('../controllers/awards.controller').createAwards)
  .put('/:id', checkAuth, checkRole, require ('../controllers/awards.controller').updateAwards)
  .delete('/:id', checkAuth, checkRole, require ('../controllers/awards.controller').deleteAwards)

module.exports = router