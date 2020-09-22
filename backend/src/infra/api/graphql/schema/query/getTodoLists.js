const { gql } = require('apollo-server-express')
const { getLists } = require('../../../../../domain/usecases/getLists')
const { usecase2query } = require('../../../../../../../../herbs2gql/src/herbs2gql')

const query = usecase2query(getLists(), {
  presenceOnRequest: true,
  presenceOnResponse: true
})

module.exports = gql(query)