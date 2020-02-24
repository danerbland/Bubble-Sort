const {User} = require('../server/db/models')

const users = [

  {
    'name': 'Dan',
    'bio': 'New soap enthusiast from New York! Trying to stay clean in a grimy city.',
    'email': 'danerbland@gmail.com',
    'password': '123',
  }

]


users.forEach(async(user) => {
  await User.create(user)
})
