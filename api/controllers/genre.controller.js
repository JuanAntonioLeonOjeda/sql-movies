const Genre = require('../models/genre.model')

async function getAllGenres (req, res) {
  try {
    const genres = await Genre.findAll()
    return res.status(200).json(genres)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneGenre (req, res) {
  try {
    const genre = await Genre.findByPk(req.params.id)
    return !genre ? res.status(404).send('Genre not found') : res.status(200).json(genre)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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

async function updateGenre (req, res) {
  try {
    const genre = await Genre.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !genre[1].length ? res.status(404).send('Genre not found') : res.status(200).json({ message: 'Genre updated', genre: genre[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteGenre (req, res) {
  try {
    const genre = await Genre.destroy({
      where: {
        id: req.params.id
      }
    })
    return !genre ? res.status(404).send('Genre not found') : res.status(200).json('Genre deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllGenres,
  getOneGenre,
  createGenre,
  updateGenre,
  deleteGenre
}