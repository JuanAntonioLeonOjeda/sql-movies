const Rating = require ('../models/rating.model')
const Movie = require('../models/movie.model')
const User = require ('../models/user.model')

async function getAllRatings (req, res) {
  try {
    const ratings = await Rating.findAll()
    return res.status(200).json(ratings)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneRating (req, res) {
  try {
    const rating = await Rating.findByPk(req.params.id)
    return !rating ? res.status(404).send('Rating not found') : res.status(200).json(rating)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getMyRatings (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    const ratings = await user.getRatings()
    return res.status(200).json(ratings)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createRating (req, res) {
  try {
    const rating = await Rating.create(req.body)
    const user = await User.findByPk(req.params.userId)
    const movie = await Movie.findByPk(req.params.movieId)
    user.addRating(rating)
    movie.addRating(rating)
    res.status(200).json({ message: 'Rating created', rating: rating })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateRating (req, res) {
  try {
    const rating = await Rating.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !rating[1].length ? res.status(404).send('Rating not found') : res.status(200).json({ message: 'Rating updated', rating: Rating[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteRating (req, res) {
  try {
    const rating = await Rating.destroy({
      where: {
        id: req.params.id
      }
    })
    return !Rating ? res.status(404).send('Rating not found') : res.status(200).json('Rating deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRatings,
  getOneRating,
  getMyRatings,
  createRating,
  updateRating,
  deleteRating
}