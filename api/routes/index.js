const router = require ('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const movieRouter = require('./movie.router')
const actorRouter = require('./actor.router')
const directorRouter = require('./director.router')
const genreRouter = require('./genre.router')
const ratingRouter = require('./rating.router')
const awardsRouter = require('./awards.router')

router
  .use('/auth', authRouter)
  .use('/user', userRouter)
  .use('/movie', movieRouter)
  .use('/actor', actorRouter)
  .use('/director', directorRouter)
  .use('/genre', genreRouter)
  .use('/rating', ratingRouter)
  .use('/awards', awardsRouter)
  
module.exports = router