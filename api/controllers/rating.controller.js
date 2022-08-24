const Rating = require ('../models/rating.model')
const Movie = require('../models/movie.model')
const User = require ('../models/user.model')

async function getAllRatings (req, res) {
  try {
    const ratings = await Rating.findAll()
    if (ratings) {
      return res.status(200).json(ratings)
    } else {
      return res.status(404).send('No ratings found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneRating (req, res) {
  try {
    const rating = await Rating.findByPk(req.params.id)
    if (rating) {
      return res.status(200).json(rating)
    } else {
      return res.status(404).send('Rating not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getMyRatings (req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id)
    const ratings = await user.getRatings()             //Lazy loading
    // const result = ratings.map(async rating => {     //Intentando mostrar la info de la película para cada valoración, pero de devuelve objetos vacíos.
    //    const obj =  await Rating.findByPk(rating.dataValues.id, {
    //     include: Movie
    //   })
    //   console.log(obj)
    //   return obj
    // })
    if (ratings.length !== 0) {
      return res.status(200).json(ratings)
    } else {
      return res.status(404).send('No ratings found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function createRating (req, res) {
  try {
    const rating = await Rating.create(req.body)
    const user = await User.findByPk(res.locals.user.id)
    const movie = await Movie.findByPk(req.params.movieId)
    user.addRating(rating)
    movie.addRating(rating)
    res.status(200).json({ message: 'Rating created', rating: rating })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function updateRating (req, res) {
  try {
    const [,rating] = await Rating.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    if (rating) {
      return res.status(200).json({ message: 'Rating updated', rating: rating })
    } else {
      return res.status(404).send('Rating not found') 
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteRating (req, res) {
  try {
    const rating = await Rating.destroy({
      where: {
        id: req.params.id
      }
    })
    if (rating) {
      return  res.status(200).json('Rating deleted')
    } else {
      return res.status(404).send('Rating not found')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRatings,
  getOneRating,
  getMyRatings,
  createRating,
  updateRating,
  deleteRating
}