const router = require ('express').Router()

const {
  createAwards
} = require ('../controllers/awards.controller')

router
  .post('/', createAwards)

module.exports = router