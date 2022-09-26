// import { Link,routes } from '@redwoodjs/router'

// import { Form, TextField, Submit, useForm, FieldError } from '@redwoodjs/forms'
// import { MetaTags, useMutation } from '@redwoodjs/web'
// import { toast, Toaster } from '@redwoodjs/web/toast'
// import TodosCell from 'src/components/TodosCell/TodosCell.js'
// import { QUERY as TodosQuery } from 'src/components/TodosCell/TodosCell.js'

// const Add_Todo = gql`
//   mutation addTodoMutation($input: CreateTodoInput!) {
//     createTodo(input: $input) {
//       id
//     }
//   }
// `

// const HomePage = ({ todo }) => {
//   const formMethods = useForm({ mode: 'onBlur' })

//   const [create, { loading, error }] = useMutation(Add_Todo, {
//     onCompleted: () => {
//       toast.success('Added!')
//       formMethods.reset()
//     },
//     refetchQueries: [
//       {
//         query: TodosQuery,
//       },
//     ],
//   })

//   const onSubmit = (data) => {
//     console.log(data)
//     create({ variables: { input: data } })
//   }
//   return (
//     <div className=" ">
//       <MetaTags title="Home" description="Home page" />
//       <Toaster />
//       <div className=''>
//         <Link to={routes.todoList()} className=" flex justify-center text-slate-200  mb-10 w-full bg-green-700  py-8 text-2xl font-bold tracking-wide">
//           TODO APP
//         </Link>

//         <Form
//           onSubmit={onSubmit}
//           config={{ mode: 'onBlur' }}
//           error={error}
//           formMethods={formMethods}
//           className="flex flex-col  items-center justify-center "
//         >
//           <TextField
//             name="name"
//             validation={{ required: true }}
//             // defaultValue={todo?.name}
//             className="w-60  md:w-96 rounded-xl border-2 py-2 pl-4 "
//           />
//           <FieldError name="name" className="py-4 font-bold text-red-500" />

//           <Submit
//             disabled={loading}
//             className="mt-2 mb-8 w-60 md:w-96 rounded-xl bg-green-500 px-8 py-2 font-bold hover:bg-green-600"
//           >
//             ADD
//           </Submit>

//           <br />
//         </Form>
//         <div >
//           <TodosCell />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoListsCell from 'src/components/TodoListsCell/TodoListsCell.js'

const HomePage = () => {
  return (
    <>
      <MetaTags title="TodoList" description="TodoList page" />
      <div className="flex flex-col text-xl sm:text-3xl  items-center">
        <div className="mb-10 flex w-full justify-around  bg-blue-600 py-8  font-bold text-slate-200">
          <h1>TODO LIST</h1>
          <Link
            className="text-lime-500 hover:text-lime-400  "
            to={routes.todoList()}
          >
            ADD ITEM
          </Link>
        </div>

        <TodoListsCell />
      </div>
    </>
  )
}

export default HomePage
