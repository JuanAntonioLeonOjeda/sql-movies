const User = require ('../models/user.model')

const bcrypt = require ('bcrypt')

async function signup (req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create( req.body,
      { 
        fields: ['userName', 'email', 'birthDate', 'password']
      })
    // delete user.password //no funciona porque user está heredando la propiedad del constructor User (creo)
    res.status(200).json({ message: 'User created!', userName: user.userName, email: user.email })
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  signup
}