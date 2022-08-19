const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

const {
  getAllRatings,
  getOneRating,
  getMyRatings,
  createRating,
  updateRating,
  deleteRating
} = require('../controllers/rating.controller')

router
  .get('/', checkAuth, checkRole, getAllRatings)
  .get('/me', checkAuth, getMyRatings)
  .get('/:id', checkAuth, checkRole, getOneRating)
  .post('/me/:movieId', checkAuth, createRating)
  .put('/:id', checkAuth, checkRole, updateRating)
  .delete('/:id', checkAuth, checkRole, deleteRating)

module.exports = router