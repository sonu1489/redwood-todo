import Todo from '../Todo/Todo'
import { useAuth } from '@redwoodjs/auth'

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      name
userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ todos }) => {
  console.log(todos,"todos")
  const { currentUser } = useAuth()

  console.log(currentUser, 'currentUser')
  const filterData = ()=>{
   return todos.filter((item)=>currentUser.id === item.userId)
  }
  return (
    <div >
      <Todo todos={filterData()} />
    </div>
  )
}
