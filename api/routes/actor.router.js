const router = require ('express').Router()

const {
  createActor
} = require ('../controllers/actor.controller')

router
  .post('/', createActor)

module.exports = router