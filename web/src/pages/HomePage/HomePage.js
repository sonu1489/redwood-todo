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

const HomePage = ({todo}) => {
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
    <>
      <MetaTags title="Home" description="Home page" />
      <Toaster />
      <h1>TODO APP</h1>
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <TextField name="name" validation={{ required: true }} defaultValue={todo?.name}/>

        <Submit disabled={loading}>Add</Submit>
        <br />
        <FieldError name="name" />
      </Form>
<TodosCell/>
    </>
  )
}

export default HomePage
