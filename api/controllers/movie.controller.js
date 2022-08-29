const { models } = require('../database')
const { Op } = require('sequelize')

async function getAllMovies (req, res) {
  try {
    if (!Object.values(req.query).length) {
      const movies = await models.movie.findAll()
      if (movies) {
        return res.status(200).json(movies)
      } else {
        return res.status(404).send('No movies found')
      }
    } else {
      const movies = await models.movie.findAll({
        where: {
          [Op.and]: [
            req.query
          ]
        }
      })
      if (movies.length !== 0) {
        return res.status(200).json(movies)
      } else {
        return res.status(404).send('No matches found')
      }
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneMovie (req, res) {
  try {
    const movie = await models.movie.findByPk(req.params.id, {
      include: [models.awards, models.director, mnodels.genre]
    })
    // const movie = await Movie.findByPk(req.params.id)
    // await movie.setDirector(1)
    // const director = await movie.getDirector()
    // return !movie ? res.status(404).send('Movie not found') : res.status(200).json({ movie: movie, director: director })
    if (movie) {
      return res.status(200).json(movie)
    } else {
      return res.status(404).send('Movie not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createMovie (req, res) {
  try {
    const movie = await models.movie.create(req.body)
    return res.status(200).json({ message: 'Movie created', movie: movie })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateMovie (req, res) {
  try {
    const [,movie] = await models.movie.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (movie) {
      return res.status(200).json({ message: 'Movie updated', movie: movie })
    } else {
      return res.status(404).send('Movie not found') 
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function assignAwards (req, res) {
  try {
    const movie = await models.movie.findByPk(req.params.id)
    if ( !movie ) return res.status(404).send('Movie not found')

    const awards = await models.awards.findByPk(req.body.awardsId)
    if ( !awards ) return res.status(404).send('Awards not found')
    
    await movie.setAward(awards)
    return res.status(200).json({ message: 'Awards assigned to movie: ' + movie.title, movie: movie })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteMovie (req, res) {
  try {
    const movie = await models.movie.destroy({
      where: {
        id: req.params.id
      }
    })
    if (movie) {
      return  res.status(200).json('Movie deleted')
    } else {
      return res.status(404).send('Movie not found')
    }
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