const sequelize = require ('./instance')

const defineModels = [
  require('../models/actor.model'),
  require('../models/awards.model'),
  require('../models/director.model'),
  require('../models/genre.model'),
  require('../models/movie.model'),
  require('../models/rating.model'),
  require('../models/user.model')
]

for (const modelDefiner of defineModels) {
  modelDefiner(sequelize)
}

module.exports = sequelize