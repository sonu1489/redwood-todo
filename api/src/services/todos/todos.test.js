import { todos, todo, createTodo, updateTodo, deleteTodo } from './todos'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('todos', () => {
  scenario('returns all todos', async (scenario) => {
    const result = await todos()

    expect(result.length).toEqual(Object.keys(scenario.todo).length)
  })

  scenario('returns a single todo', async (scenario) => {
    const result = await todo({ id: scenario.todo.one.id })

    expect(result).toEqual(scenario.todo.one)
  })

  scenario('creates a todo', async () => {
    const result = await createTodo({
      input: { userId: 8840912 },
    })

    expect(result.userId).toEqual(8840912)
  })

  scenario('updates a todo', async (scenario) => {
    const original = await todo({ id: scenario.todo.one.id })
    const result = await updateTodo({
      id: original.id,
      input: { userId: 2717528 },
    })

    expect(result.userId).toEqual(2717528)
  })

  scenario('deletes a todo', async (scenario) => {
    const original = await deleteTodo({ id: scenario.todo.one.id })
    const result = await todo({ id: original.id })

    expect(result).toEqual(null)
  })
})
