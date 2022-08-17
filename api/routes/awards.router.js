const router = require ('express').Router()

const {
  getAllAwards,
  getOneAward,
  createAwards,
  updateAwards,
  deleteAwards
} = require ('../controllers/awards.controller')

router
  .get('/', getAllAwards)
  .get('/:id', getOneAward)
  .post('/', createAwards)
  .put('/:id', updateAwards)
  .delete('/:id', deleteAwards)

module.exports = router