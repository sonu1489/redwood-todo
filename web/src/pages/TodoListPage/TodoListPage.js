import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoListsCell from 'src/components/TodoListsCell/TodoListsCell.js'

const TodoListPage = () => {
  return (
    <>
      <MetaTags title="TodoList" description="TodoList page" />
      <div className="flex flex-col  items-center">
        <div className='mb-10 flex justify-around w-full  bg-blue-600 py-8 text-3xl font-bold text-slate-200'>
        <h1


        >
          TODO LIST
        </h1>
        <Link className='text-lime-500 hover:text-lime-400  ' to={routes.home()}>ADD ITEM</Link>
        </div>



        <TodoListsCell />

      </div>
    </>
  )
}

export default TodoListPage
