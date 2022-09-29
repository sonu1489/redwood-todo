export const schema = gql`
  type Todo {
    id: Int!
    name: String
    userId: Int!
  }

  type Query {
    todos: [Todo!]! @skipAuth
    todo(id: Int!): Todo @skipAuth
  }

  input CreateTodoInput {
    name: String
    userId: Int!
  }

  input UpdateTodoInput {
    name: String
    userId: Int
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth(roles: "admin")
  }
`
