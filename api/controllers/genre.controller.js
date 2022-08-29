const { models } = require('../database')

async function getAllGenres (req, res) {
  try {
    const genres = await models.genre.findAll()
    if (genres) {
      return res.status(200).json(genres)
    } else {
      return res.status(404).send('No genres found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneGenre (req, res) {
  try {
    const genre = await models.genre.findByPk(req.params.id)
    if (genre) {
      return res.status(200).json(genre)
    } else {
      return res.status(404).send('Genre not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createGenre (req, res) {
  try {
    const genre = await models.genre.create({
      name: req.body.name
    })
    return res.status(200).json({ message: 'Genre created', genre: genre })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateGenre (req, res) {
  try {
    const [,genre] = await models.genre.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (genre) {
      return res.status(200).json({ message: 'Genre updated', genre: genre })
    } else {
      return res.status(404).send('Genre not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteGenre (req, res) {
  try {
    const genre = await models.genre.destroy({
      where: {
        id: req.params.id
      }
    })
    if (genre) {
      return res.status(200).json('Genre deleted')
    } else {
      return res.status(404).send('Genre not found')
    }
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