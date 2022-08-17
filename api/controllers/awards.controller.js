const Awards = require ('../models/awards.model')

async function getAllAwards (req, res) {
  try {
    const awards = await Awards.findAll()
    return res.status(200).json(awards)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneAward (req, res) {
  try {
    const award = await Awards.findByPk(req.params.id)
    return !award ? res.status(404).send('Awards code not found') : res.status(200).json(award)
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
    return !awards[1].length ? res.status(404).send('Awards code not found') : res.status(200).json({ message: 'Awards updated', awards: awards[1] })
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
    return !awards ? res.status(404).send('Awards code not found') : res.status(200).send('Awards deleted')
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