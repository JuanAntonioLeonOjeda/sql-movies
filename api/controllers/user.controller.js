const User = require ('../models/user.model')
const Movie = require ('../models/movie.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    return !user ? res.status(404).send('User not found') : res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateUser (req, res) {
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !user[1].length ? res.status(404).send('User not found') : res.status(200).json({ message: 'User updated', user: user[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getFavouriteMovies (req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const movies = await user.getMovies()
    return res.status(200).json(movies)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function addFavouriteMovie (req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const movie = await Movie.findByPk(req.body.movieId)
    user.addMovie(movie)
    return res.status(200).json({ message: 'Movie added to favourites', movie: movie })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function removeFavouriteMovie (req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const movie = await Movie.findByPk(req.body.movieId)
    user.removeMovie(movie)
    return res.status(200).json({ message: 'Movie removed from favourites' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


async function deleteUser (req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    })
    return !user ? res.status(404).send('User not found') : res.status(200).send('User deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  getFavouriteMovies,
  addFavouriteMovie,
  removeFavouriteMovie,
  deleteUser
}