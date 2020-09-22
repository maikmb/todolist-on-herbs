const { gql } = require('apollo-server-express')

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema,
  // types 
  require('./type/todoLists'),

  // queries
  require('./query/getTodoLists'),

  // mutations
  require('./mutation/createTodoList'),
  require('./mutation/deleteTodoList'),
  require('./mutation/updateTodoList'),
]
