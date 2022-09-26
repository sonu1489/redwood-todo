import Todo from "../Todo/Todo"

export const QUERY = gql`
  query TodosQuery {
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

export const Success = ({todos}) => {

  return <div className="">
 <Todo todos={todos}/>
  </div>


   }


