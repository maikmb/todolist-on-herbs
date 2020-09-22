const { gql } = require('apollo-server-express')
const { createList } = require('../../../../../domain/usecases/createList')
const { usecase2mutation } = require('../../../../../../../../herbs2gql/src/herbs2gql')

const mutation = usecase2mutation(createList(), {
  presenceOnRequest: true,
  presenceOnResponse: true
})

module.exports = gql(mutation)
