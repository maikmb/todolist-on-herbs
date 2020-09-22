const { entity, field } = require('gotu')

module.exports.TodoList =
    entity('Todo List', {
        id: field(Number),
        name: field(String, {
            validation: { presence: true, length: { minimum: 3 } }
        })
    })