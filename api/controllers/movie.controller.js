const Movie = require ('../models/movie.model')
const Awards = require ('../models/awards.model')
const { Op } = require('sequelize')

async function getAllMovies (req, res) {
  try {
    if (!Object.values(req.query).length) {
      const movies = await Movie.findAll()
      return res.status(200).json(movies)
    } else {
      const movies = await Movie.findAll({
        where: {
          [Op.and]: [
            req.query
          ]
        }
      })
      return !movies ? res.status(404).send('No matchs found') : res.status(200).json(movies)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneMovie (req, res) {
  try {
    const movie = await Movie.findByPk(req.params.id)
    return !movie ? res.status(404).send('Movie not found') : res.status(200).json(movie)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createMovie (req, res) {
  try {
    const movie = await Movie.create(req.body)
    return res.status(200).json({ message: 'Movie created', movie: movie })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateMovie (req, res) {
  try {
    const movie = await Movie.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !movie[1].length ? res.status(404).send('Movie not found') : res.status(200).json({ message: 'Movie updated', movie: movie[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function assignAwards (req, res) {
  try {
    const movie = await Movie.findByPk(req.params.id)
    if ( !movie ) {
      return res.status(404).send('Movie not found')
    }
    const awards = await Awards.findByPk(req.body.awardsId)
    if ( !awards ) {
      return res.status(404).send('Awards code not found')
    }
    await movie.setAwards(awards)
    return res.status(200).json({ message: 'Awards assigned to movie: ' + movie.title, movie: movie })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteMovie (req, res) {
  try {
    const movie = await Movie.destroy({
      where: {
        id: req.params.id
      }
    })
    return !movie ? res.status(404).send('Movie not found') : res.status(200).json('Movie deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  assignAwards,
  deleteMovie
}