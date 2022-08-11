const Director = require('../models/director.model')

async function createDirector (req, res) {
  try {
    const director = await Director.create({
      name: req.body.name
    })
    res.status(200).json({ message: 'Director created', director: director })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createDirector
}