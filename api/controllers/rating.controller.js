const Rating = require ('../models/rating.model')

async function createRating (req, res) {
  try {
    const rating = await Rating.create(req.body)
    res.status(200).json({ message: 'Rating created', rating: rating })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  createRating
}