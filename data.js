const faker = require('./vendor/faker')

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function formatTime(date) {
  const day     = date.getDay()
  const month   = date.getMonth()
  const year    = date.getFullYear()
  const hh      = date.getHours()
  let   hours   = hh
  const minutes = "0" + date.getMinutes()
  let   dd      = 'AM'

  if (hours >= 12) {
    hours = hh - 12
    dd = 'PM'
  }

  if (hours === 0) {
    hours = 12
  }

  // const formattedTime = month + '/' + day + '/' + year + ' @ ' + hours + ':' + minutes.substr(-2) + ' ' + dd
  const formattedTime = month + '/' + day + '/' + year

  return formattedTime
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = function() {
  var data = {
    physicians: []
  }

  for (var i = 0; i < 100; i++) {
    data.physicians.push({
      id: i,
      specialties: [],
      showSpecialties: false,
      rating: getRandomInt(0,5),
      isAvailable: faker.random.boolean(),
      sender: faker.name.firstName() + ' ' + faker.name.lastName(),
      avatar: faker.image.avatar(),
      recipient: faker.commerce.productName(),
      subject: 'Tristar Centennial',
      body: faker.lorem.paragraphs()
    })

    for (var x = 0; x < getRandomInt(1, 10); x++) {
      data.physicians[i].specialties.push({
        id: x,
        name: faker.name.jobArea()
      })
    }
  }

  return data
}
