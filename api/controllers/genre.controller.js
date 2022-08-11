const Genre = require('../models/genre.model')

async function createGenre (req, res) {
  try {
    const genre = await Genre.create({
      name: req.body.name
    })
    res.status(200).json({ message: 'Genre created', genre: genre })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createGenre
}