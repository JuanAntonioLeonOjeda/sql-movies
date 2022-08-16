const Awards = require ('../models/awards.model')

async function createAwards (req, res) {
  try {
    const awards = await Awards.create(req.body)
    res.status(200).json({ message: 'Awards created', awards: awards })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createAwards
}