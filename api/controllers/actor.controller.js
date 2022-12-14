const { models } = require('../database')

async function getAllActors (req, res) {
  try {
    const actors = await models.actor.findAll({
      where: req.query
    })
    if (actors.length  !== 0) {
      return res.status(200).json(actors)
    } else {
      return res.status(404).send('No actors found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneActor (req, res) {
  try {
    const actor = await models.actor.findByPk(req.params.id)
    if (actor) {
      return res.status(200).json(actor)
    } else {
      return res.status(404).send('Actor not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createActor (req, res) {
  try {
    const actor = await models.actor.create({
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
    const [,actor] = await models.actor.update({ name: req.body.name }, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (actor) {
      return res.status(200).json({ message: 'Actor updated', actor: actor })
    } else {
      return res.status(404).send('Actor not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function addMovie (req, res) {
  try {
    const actor = await models.actor.findByPk(req.params.id)
    if (!actor) return res.status(404).send('Actor not found')
    if (typeof req.body.movieId === 'object') {
      await actor.addMovies(req.body.movieId)
    } else {
      await actor.addMovie(req.body.movieId)
    }
    return res.status(200).send('Movie added to actor')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteActor (req, res) {
  try {
    const actor = await models.actor.destroy({
      where: {
        id: req.params.id
      }
    })
    if (actor) {
      return res.status(200).send('Actor deleted')
    } else {
      return res.status(404).send('Actor not found')
    }
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