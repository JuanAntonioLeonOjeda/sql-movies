const router = require ('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const movieRouter = require('./movie.router')
const actorRouter = require('./actor.router')
const directorRouter = require('./director.router')
const genreRouter = require('./genre.router')

module.exports = router