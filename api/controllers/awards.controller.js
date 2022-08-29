const { models } = require('../database')

async function getAllAwards (req, res) {
  try {
    const awards = await models.awards.findAll()
    if (awards) {
      return res.status(200).json(awards)
    } else {
      return res.status(404).send('No movie awards found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneAward (req, res) {
  try {
    const award = await models.awards.findByPk(req.params.id)
    if (award) {
      return res.status(200).json(award)
    } else {
      return res.status(404).send('Movie awards not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createAwards (req, res) {
  try {
    const awards = await models.awards.create(req.body)
    res.status(200).json({ message: 'Movie awards created', awards: awards })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateAwards (req, res) {
  try {
    const [,awards] = await models.awards.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (awards) {
      return res.status(200).json({ message: 'Movie awards updated', awards: awards })
    } else {
      return res.status(404).send('Movie awards not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteAwards (req, res) {
  try {
    const awards = await models.awards.destroy({
      where: {
        id: req.params.id
      }
    })
    if (awards) {
      return res.status(200).send('Movie awards deleted')
    } else {
      return res.status(404).send('Movie awards not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllAwards,
  getOneAward,
  createAwards,
  updateAwards,
  deleteAwards
}