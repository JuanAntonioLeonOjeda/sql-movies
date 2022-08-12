const User = require ('../models/user.model')

const bcrypt = require ('bcrypt')

async function signup (req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create( req.body,
      { 
        fields: ['userName', 'email', 'birthDate', 'password']
      })
    delete user.password
    res.status(200).json({ message: 'User created!', user: user })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  signup
}