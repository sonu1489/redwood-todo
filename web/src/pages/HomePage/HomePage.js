import { Link,routes } from '@redwoodjs/router'

import { Form, TextField, Submit, useForm, FieldError } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import TodosCell from 'src/components/TodosCell/TodosCell.js'
import { QUERY as TodosQuery } from 'src/components/TodosCell/TodosCell.js'

const Add_Todo = gql`
  mutation addTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`

const HomePage = ({ todo }) => {
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(Add_Todo, {
    onCompleted: () => {
      toast.success('Added!')
      formMethods.reset()
    },
    refetchQueries: [
      {
        query: TodosQuery,
      },
    ],
  })

  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <div className=" ">
      <MetaTags title="Home" description="Home page" />
      <Toaster />
      <div className=' h-screen'>
        <Link to={routes.todoList()} className=" flex justify-center text-slate-200  mb-10 w-full bg-green-700  py-8 text-2xl font-bold tracking-wide">
          TODO APP
        </Link>

        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
          className="flex flex-col  items-center justify-center  "
        >
          <TextField
            name="name"
            validation={{ required: true }}
            // defaultValue={todo?.name}
            className="w-96 rounded-xl border-2 py-2 pl-4 "
          />
          <FieldError name="name" className="py-4 font-bold text-red-500" />

          <Submit
            disabled={loading}
            className="mt-2 w-96 rounded-xl bg-green-500 px-8 py-2 font-bold hover:bg-green-600"
          >
            ADD
          </Submit>

          <br />
        </Form>
        <div >
          <TodosCell />
        </div>
      </div>
    </div>
  )
}

export default HomePage
