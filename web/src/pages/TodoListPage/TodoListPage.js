
import { Link, routes } from '@redwoodjs/router'

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

const TodoListPage = ({ todo }) => {
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
      <div className="">
        <Link
          to={routes.home()}
          className=" mb-10 flex w-full  justify-center bg-green-700 py-8  text-2xl font-bold tracking-wide text-slate-200"
        >
          TODO APP
        </Link>

        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
          className="flex flex-col  items-center justify-center "
        >
          <TextField
            name="name"
            validation={{ required: true }}
            // defaultValue={todo?.name}
            className="w-60  rounded-xl border-2 py-2 pl-4 md:w-96 "
          />
          <FieldError name="name" className="py-4 font-bold text-red-500" />

          <Submit
            disabled={loading}
            className="mt-2 mb-8 w-60 rounded-xl bg-green-500 px-8 py-2 font-bold hover:bg-green-600 md:w-96"
          >
            {loading ? (
              <svg className="h-5 animate-spin text-center" viewBox="0 0 100 100">
                <path
                  fill="#fff"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            ) :
              "ADD"
            }
          </Submit>

          <br />
        </Form>
        <div>
          <TodosCell />
        </div>
      </div>
    </div>
  )
}

export default TodoListPage
