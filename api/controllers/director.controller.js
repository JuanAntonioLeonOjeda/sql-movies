const Director = require('../models/director.model')

async function getAllDirectors (req, res) {
  try {
    const directors = await Director.findAll()
    return res.status(200).json(directors)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneDirector (req, res) {
  try {
    const director = await Director.findByPk(req.params.id)
    return !director ? res.status(404).send('Director not found') : res.status(200).json(director)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createDirector (req, res) {
  try {
    const director = await Director.create(req.body)
    res.status(200).json({ message: 'Director created', director: director })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateDirector (req, res) {
  try {
    const director = await Director.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !director[1].length ? res.status(404).send('Director not found') : res.status(200).json({ message: 'Director updated', director: director[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteDirector (req, res) {
  try {
    const director = await Director.destroy({
      where: {
        id: req.params.id
      }
    })
    return !director ? res.status(404).send('Director not found') : res.status(200).json(director)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllDirectors,
  getOneDirector,
  createDirector,
  updateDirector,
  deleteDirector
}