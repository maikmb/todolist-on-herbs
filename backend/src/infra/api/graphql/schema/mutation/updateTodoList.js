const { gql } = require('apollo-server-express')
const { updateList } = require('../../../../../domain/usecases/updateList')
const { usecase2mutation } = require('../../../../../../../../herbs2gql/src/herbs2gql')

const mutation = usecase2mutation(updateList(), {
  presenceOnRequest: true,
  presenceOnResponse: true
})

module.exports = gql(mutation)