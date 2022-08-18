const router = require ('express').Router()

const {
  getAllRatings,
  getOneRating,
  getMyRatings,
  createRating,
  updateRating,
  deleteRating
} = require('../controllers/rating.controller')

router
  .get('/', getAllRatings)
  .get('/:id', getOneRating)
  .get('/profile/:id', getMyRatings)
  .post('/:userId/:movieId', createRating)
  .put('/:id', updateRating)
  .delete('/:id', deleteRating)

module.exports = router