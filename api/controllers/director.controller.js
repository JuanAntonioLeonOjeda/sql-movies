const { models } = require('../database')

async function getAllDirectors (req, res) {
  try {
    const directors = await models.director.findAll()
    if (directors) {
      return res.status(200).json(directors)
    } else {
      return res.status(404).send('No directors found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneDirector (req, res) {
  try {
    const director = await models.director.findByPk(req.params.id)
    if (director) {
      return res.status(200).json(director)
    } else {
      return res.status(404).send('Director not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createDirector (req, res) {
  try {
    const director = await models.director.create(req.body)
    return res.status(200).json({ message: 'Director created', director: director })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateDirector (req, res) {
  try {
    const [,director] = await models.director.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (director) {
      return res.status(200).json({ message: 'Director updated', director: director })
    } else {
      return res.status(404).send('Director not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteDirector (req, res) {
  try {
    const director = await models.director.destroy({
      where: {
        id: req.params.id
      }
    })
    if (director) {
      return res.status(200).send('Director deleted')
    } else {
      return res.status(404).send('Director not found')
    }
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