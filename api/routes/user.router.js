const router = require ('express').Router()

const {
  checkAuth,
  checkRole
} = require ('../utils')

router
  .get('/', checkAuth, checkRole, require ('../controllers/user.controller').getAllUsers)
  .get('/:id', checkAuth, checkRole, require ('../controllers/user.controller').getOneUser)
  .get('/me/favourite', checkAuth, require ('../controllers/user.controller').getFavouriteMovies)
  .put('/:id', checkAuth, checkRole, require ('../controllers/user.controller').updateUser)
  .put('/me/favourite', checkAuth, require ('../controllers/user.controller').addFavouriteMovie)
  .delete('/:id', checkAuth, checkRole, require ('../controllers/user.controller').deleteUser)
  .delete('/me/favourite', checkAuth, require ('../controllers/user.controller').removeFavouriteMovie)

module.exports = router