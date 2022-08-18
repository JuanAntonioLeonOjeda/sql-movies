const router = require ('express').Router()

const {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
} = require ('../controllers/user.controller')

router
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)

module.exports = router