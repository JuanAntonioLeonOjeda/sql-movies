const router = require ('express').Router()

const {
  getAllActors,
  getOneActor,
  createActor,
  updateActor,
  deleteActor
} = require ('../controllers/actor.controller')

router
  .get('/', getAllActors)
  .get('/:id', getOneActor)
  .post('/', createActor)
  .put('/:id', updateActor)
  .delete('/:id', deleteActor)

module.exports = router