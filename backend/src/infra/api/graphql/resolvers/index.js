const { GraphQLDateTime } = require('graphql-iso-date')

const createListResolver  = require('./mutation/createTodoList')
const deleteListResolver  = require('./mutation/deleteTodoList')
const getListsResolver  = require('./query/getTodoLists')

const customScalarResolver = {
  Date: GraphQLDateTime
}

module.exports = [
  customScalarResolver,
  createListResolver,
  deleteListResolver,
  getListsResolver,
]
