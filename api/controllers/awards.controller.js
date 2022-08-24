const Awards = require ('../models/awards.model')

async function getAllAwards (req, res) {
  try {
    const awards = await Awards.findAll()
    if (awards) {
      return res.status(200).json(awards)
    } else {
      return res.status(404).send('No awards found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneAward (req, res) {
  try {
    const award = await Awards.findByPk(req.params.id)
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
    const awards = await Awards.create(req.body)
    res.status(200).json({ message: 'Awards created', awards: awards })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateAwards (req, res) {
  try {
    const awards = await Awards.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (awards[1].length !== 0) {
      return res.status(200).json({ message: 'Awards updated', awards: awards[1] })
    } else {
      return res.status(404).send('Movie awards not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteAwards (req, res) {
  try {
    const awards = await Awards.destroy({
      where: {
        id: req.params.id
      }
    })
    if (awards) {
      return res.status(200).send('Awards deleted')
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