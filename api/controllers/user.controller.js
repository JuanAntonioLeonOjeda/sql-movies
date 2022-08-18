const User = require ('../models/user.model')

async function getAllUsers (req, res) {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getOneUser (req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    return !user ? res.status(404).send('User not found') : res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function updateUser (req, res) {
  try {
    const user = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    })
    return !user[1].length ? res.status(404).send('User not found') : res.status(200).json({ message: 'User updated', user: user[1] })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function deleteUser (req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    })
    return !user ? res.status(404).send('User not found') : res.status(200).send('User deleted')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser
}