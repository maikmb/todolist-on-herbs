const { gql } = require('apollo-server-express')
const { TodoList } = require('../../../../../domain/entities/todoList')
const { entity2gql } = require('../../../../../../../../herbs2gql/src/herbs2gql')

const type = entity2gql(TodoList)

module.exports = gql(type)