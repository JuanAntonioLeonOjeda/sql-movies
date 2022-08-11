const Movie = require ('../models/movie.model')

async function createMovie (req, res) {
  try {
    const movie = await Movie.create({
      title: req.body.title,
      releaseDate: req.body.releaseDate,
      synopsis: req.body.synopsis
    })
    res.status(200).json({ message: 'Movie created', movie: movie })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createMovie
}