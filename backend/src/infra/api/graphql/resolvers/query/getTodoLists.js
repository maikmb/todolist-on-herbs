const {
  UserInputError,
} = require('apollo-server-express')

const dependency = {
  getLists: require('../../../../../domain/usecases/getLists').getLists,
}

const resolvers = {
  Query: {
    getTodoLists: async (parent, args) => {
      const di = Object.assign({}, dependency, args.injection)
      const uc = di.getLists(args.injection)
      uc.authorize({ canGetLists: true }) // TODO: authorize user
      const response = await uc.run({ ids: args.ids })

      if (response.isErr) throw new UserInputError(null, { invalidArgs: response.err })
      return response.ok
    }
  }
}

module.exports = resolvers
