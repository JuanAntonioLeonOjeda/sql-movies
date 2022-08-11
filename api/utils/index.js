function is18(value) {
  const today = new Date()
  const birthDate = new Date(value)
  var age = today.getFullYear() - birthDate.getFullYear()
  var month = today.getMonth() - birthDate.getMonth()
  month < 0 || (month === 0 && today.getDate() < birthDate.getDate()) ? age-- : age
  if (age < 18) {
    throw new Error ('User must be at least 18 years old')
  }
}

module.exports = { 
  is18
}
