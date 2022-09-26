export const QUERY = gql`
  query TodoListsQuery {
    todos {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ todos }) => {
  console.log(todos, 'todos')
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="w-96">
            <h1 className="text-xl font-semibold mb-4 hover:bg-blue-300 uppercase bg-slate-200 drop-shadow-md  py-2 rounded-lg text-center">{todo.name}</h1>
          </div>
        )
      })}
    </>
  )
}
