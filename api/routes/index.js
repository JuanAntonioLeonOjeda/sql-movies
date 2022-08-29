const router = require ('express').Router()

router
  .use('/auth',  require('./auth.router'))
  .use('/user', require('./user.router'))
  .use('/movie', require('./movie.router'))
  .use('/actor', require('./actor.router'))
  .use('/director', require('./director.router'))
  .use('/genre', require('./genre.router'))
  .use('/rating', require('./rating.router'))
  .use('/awards', require('./awards.router'))

module.exports = router