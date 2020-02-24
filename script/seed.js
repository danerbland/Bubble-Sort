const {User} = require('../server/db/models')

//Seeding Users

const users = [
  {
    'name': 'Dan',
    'bio': 'New soap enthusiast from New York! Trying to stay clean in a grimy city.',
    'email': 'danerbland@gmail.com',
    'password': '123',
  },
  {
    'name': 'Tayla',
    'bio': 'Connoisseur of the high life',
    'email': 'tayla@fullstack.com',
    'password': '123'
  },
  {
    'name': 'Alex',
    'bio': 'Very clean! Amateur soapmaker and soap enthusiast',
    'email': 'Alex@soaps.com',
    'password': '123'

  },
  {
    'name': 'Peter',
    'bio': 'I don\'t really know what I\'m doing here. I prefer mud',
    'email': 'peter@darpa.gov',
    'password': '123'
  }
]

users.forEach(async(user) => {
  await User.create(user)
})


// Seeding
