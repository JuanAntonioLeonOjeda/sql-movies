const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

const {
  getAllUsers,
  getOneUser,
  updateUser,
  getFavouriteMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
  deleteUser
} = require ('../controllers/user.controller')

router
  .get('/', checkAuth, checkRole, getAllUsers)
  .get('/:id', checkAuth, checkRole, getOneUser)
  .get('/me/favourite', checkAuth, getFavouriteMovies)
  .put('/:id', checkAuth, checkRole, updateUser)
  .put('/me/favourite', checkAuth, addFavouriteMovie)
  .delete('/:id', checkAuth, checkRole, deleteUser)
  .delete('/me/favourite', checkAuth, removeFavouriteMovie)

module.exports = router