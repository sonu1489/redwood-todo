import { Submit, Form, TextField } from '@redwoodjs/forms'
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { QUERY as TodosQuery } from '../TodosCell/TodosCell'
import { toast,Toaster } from '@redwoodjs/web/dist/toast'


const UPDATE_TODO_MUTATION = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
    }
  }
`


const Edit = ({ todo }) => {

  const [edit, setEdit] = useState(false)
  const [data,setData] = useState()

  const [updateTodo, { loading, error }] = useMutation(UPDATE_TODO_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
    },
    refetchQueries: [
      {
        query: TodosQuery,

      },
    ],
    onError: (error) => {
      toast.error(error.message)
    },
  })


  const handleEdit = (todo) => {
    setEdit(true)
    setData(todo)

  }

  const onSubmit=(formData,todo)=>{

    updateTodo({ variables: { id:todo.id, input:formData } })
    setEdit(false)
  }

  return (
    <div>
      {!edit ? (
        <>
          <h1>{todo.name}</h1>
          <button onClick={() => handleEdit(todo)}>Edit</button>
        </>
      ) : (
        <>
        <Toaster/>
        <Form onSubmit={(formData)=>onSubmit(formData,todo)} error={error}>
          <TextField defaultValue={data.name}  name="name" />
          <Submit  disabled={loading}>update</Submit>
        </Form>
        </>

      )}
    </div>
  )
}

export default Edit
