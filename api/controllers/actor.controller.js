const Actor = require ('../models/actor.model')

async function getAllActors (req, res) {
  try {
    const actors = await Actor.findAll()
    return res.status(200).json(actors)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneActor (req, res) {
  try {
    const actor = await Actor.findByPk(req.params.id)
    return !actor ? res.status(404).send('Actor not found') : res.status(200).json(actor)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createActor (req, res) {
  try {
    const actor = await Actor.create({
      name: req.body.name,
    })
    actor.addMovies(req.body.movieId)
    return res.status(200).json({ message: 'Actor created', actor: actor })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateActor (req, res) {
  try {
    const actor = await Actor.update({ name: req.body.name }, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !actor[1].length ? res.status(404).send('Actor not found') : res.status(200).json({ message: 'Actor updated', actor: actor[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function addMovie (req, res) {
  try {
    const actor = await Actor.findByPk(req.params.id)
    if (typeof req.body.movieId === 'object') {
      await actor.addMovies(req.body.movieId)
    } else {
      await actor.addMovie(req.body.movieId)
    }
    return !actor ? res.status(404).send('Actor not found') : res.status(200).send('Movie added to actor')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteActor (req, res) {
  try {
    const actor = await Actor.destroy({
      where: {
        id: req.params.id
      }
    })
    return !actor ? res.status(404).send('Actor not found') : res.status(200).send('Actor deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllActors,
  getOneActor,
  createActor,
  updateActor,
  addMovie,
  deleteActor
}