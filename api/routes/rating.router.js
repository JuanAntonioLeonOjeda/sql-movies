const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, checkRole, require('../controllers/rating.controller').getAllRatings)
  .get('/me', checkAuth, require('../controllers/rating.controller').getMyRatings)
  .get('/:id', checkAuth, checkRole, require('../controllers/rating.controller').getOneRating)
  .post('/me/:movieId', checkAuth, require('../controllers/rating.controller').createRating)
  .put('/:id', checkAuth, checkRole, require('../controllers/rating.controller').updateRating)
  .delete('/:id', checkAuth, checkRole, require('../controllers/rating.controller').deleteRating)

module.exports = router