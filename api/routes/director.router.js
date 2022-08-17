const router = require ('express').Router()

const {
  getAllDirectors,
  getOneDirector,
  createDirector,
  updateDirector,
  deleteDirector
} = require('../controllers/director.controller')

router
  .get('/', getAllDirectors)
  .get('/:id', getOneDirector)
  .post('/', createDirector)
  .put('/:id', updateDirector)
  .delete('/:id', deleteDirector)

module.exports = router