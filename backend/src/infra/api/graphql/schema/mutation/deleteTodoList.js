const { gql } = require('apollo-server-express')
const { deleteList } = require('../../../../../domain/usecases/deleteList')
const { usecase2mutation } = require('../../../../../../../../herbs2gql/src/herbs2gql')

const mutation = usecase2mutation(deleteList(), {
  presenceOnRequest: true,
  presenceOnResponse: true
})

module.exports = gql(mutation)
