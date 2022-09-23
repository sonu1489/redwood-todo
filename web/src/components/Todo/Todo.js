import Edit from '../Edit/Edit'
const Todo = ({ todos }) => {

  return (
    <div>
      {todos.map((todo) => {
        return (

            <Edit todo={todo} key={todo.id}/>

        )
      })}
    </div>
  )
}

export default Todo
