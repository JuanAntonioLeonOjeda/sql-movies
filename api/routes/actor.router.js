const router = require ('express').Router()

const {
  getAllActors,
  getOneActor,
  createActor,
  updateActor,
  addMovie,
  deleteActor
} = require ('../controllers/actor.controller')

router
  .get('/', getAllActors)
  .get('/:id', getOneActor)
  .post('/', createActor)
  .put('/:id', updateActor)
  .put('/:id/movie', addMovie)
  .delete('/:id', deleteActor)

module.exports = router