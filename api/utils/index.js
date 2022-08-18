const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


function is18(value) {
  const today = new Date()
  const birthDate = new Date(value)
  var age = today.getFullYear() - birthDate.getFullYear()
  var month = today.getMonth() - birthDate.getMonth()
  month < 0 || (month === 0 && today.getDate() < birthDate.getDate()) ? age-- : age
  if (age < 18) {
    return false
  }
  return true
}

function checkAuth (req, res, next) {
  if (!req.headers.token) return res.status(401).send('User not logged in')

  jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(401).send('Token not valid')
    const user = await User.findOne({ // error: User.findOne is not a function - por qué?
      where: {
        email: decoded.email
      }
    })
    if (!user) return res.status(401).send('Token not valid')
    else {
      res.locals.user = user
    }
    next()
  })
}

function checkRole (req, res, next) {
  res.locals.user.role !== 'admin' ? res.status(401).send('User not authorized') : next()
}

module.exports = { 
  is18,
  checkAuth,
  checkRole
}
