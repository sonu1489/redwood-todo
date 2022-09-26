import { Submit, Form, TextField, useForm } from '@redwoodjs/forms'
import { useState } from 'react'
import { useMutation } from '@redwoodjs/web'
import { QUERY as TodosQuery } from '../TodosCell/TodosCell'
import { toast, Toaster } from '@redwoodjs/web/dist/toast'

const UPDATE_TODO_MUTATION = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
    }
  }
`
const DELETE_TODO_MUTATION = gql`
  mutation DeleteTodoMutation($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const Edit = ({ todo }) => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [edit, setEdit] = useState(false)
  const [data, setData] = useState()

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
  const [deleteTodo] = useMutation(DELETE_TODO_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    refetchQueries: [{ query: TodosQuery }],
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleEdit = (todo) => {
    setEdit(true)
    setData(todo)
  }
  const handleDelete = (id) => {
    // setDel(id)
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deleteTodo({ variables: { id } })
    }
  }

  const onSubmit = (formData, data) => {
    console.log(data, 'data')

    updateTodo({ variables: { id: data.id, input: formData } })
    setEdit(false)
  }

  return (
    <div>
      {!edit ? (
        <>
          <div className="flex justify-between mx-60    ">

            <h1 className="pb-2 text-xl  font-normal">{todo.name}</h1>

            <div className="font-semibold">
              <button
                className="pr-4 text-lime-500"
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
              <button className='text-red-700' onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Toaster />
          <Form
            onSubmit={(formData) => onSubmit(formData, data)}
            validation={{ required: true }}
            formMethods={formMethods}
            config={{ mode: 'onBlur' }}
            error={error}
            className="my-4 flex justify-center "
          >
            <TextField
              defaultValue={data.name}
              name="name"
              className="mr-6 rounded-xl border-2 py-2 pl-4"
            />
            <Submit
              className="rounded-md bg-green-600 px-2 py-2 text-white hover:bg-green-700 "
              disabled={loading}
            >
              update
            </Submit>
          </Form>
        </div>
      )}
    </div>
  )
}

export default Edit
