const User = require('../models/user.model')

async function signup (req, res) {
  try {
    const user = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      birthDate: req.body.birthDate
    },
    {fields: ['userName', 'email', 'birthDate']}
    )

    res.status(200).json({ message: 'User created!', user: user })
  } catch (error) {
    console.error ('Error during signup: ' + error)
  }
}

module.exports = {
  signup
}