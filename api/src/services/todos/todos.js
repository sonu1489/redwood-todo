import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const todos = () => {
  return db.todo.findMany()
}

export const todo = ({ id }) => {
  return db.todo.findUnique({
    where: { id },
  })
}

export const createTodo = ({ input }) => {
  return db.todo.create({
    data: input,
  })
}

export const updateTodo = ({ id, input }) => {
  return db.todo.update({
    data: input,
    where: { id },
  })
}

export const deleteTodo = ({ id }) => {
  requireAuth({ roles: 'admin' })
  return db.todo.delete({
    where: { id },
  })
}
