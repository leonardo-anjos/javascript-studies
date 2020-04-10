// controllers graphql

// const users = [
//   { id: 1, name: 'Leonardo Anjos', email: 'leodrums11@gmail.com' },
//   { id: 2, name: 'Quezia Uchoa', email: 'queziafu@hotmail.com' }
// ]

const user = require('./user');

module.exports = {
  Query: {
    users: () => user.find(),
    user: (_, { id }) => user.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => user.create({ name, email })
  }
}