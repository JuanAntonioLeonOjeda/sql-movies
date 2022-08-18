const router = require ('express').Router()

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
  .get('/', getAllUsers)
  .get('/:id', getOneUser)
  .get('/:id/favourite', getFavouriteMovies)
  .put('/:id', updateUser)
  .put('/:id/favourite', addFavouriteMovie)
  .delete('/:id', deleteUser)
  .delete('/:id/favourite', removeFavouriteMovie)

module.exports = router