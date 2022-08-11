const Actor = require ('../models/actor.model')

async function createActor (req, res) {
  try {
    const actor = await Actor.create({
      name: req.body.name
    })
    res.status(200).json({ message: 'Actor created', actor: actor })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createActor
}