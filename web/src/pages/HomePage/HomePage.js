

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TodoListsCell from 'src/components/TodoListsCell/TodoListsCell.js'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="TodoList" description="TodoList page" />
      <div className="flex flex-col items-center text-xl  sm:text-3xl">

        <div className="mb-10 md:flex md:justify-around w-full bg-blue-600 py-4 md:py-8  font-bold text-slate-200">
          <div className='flex justify-around'>
          <h1 className='md:mr-48'>TODO LIST</h1>
          <Link
            className="text-lime-500    hover:text-lime-400  "
            to={routes.todoList()}
          >
            ADD ITEM
          </Link>
          </div>

          {isAuthenticated ? (
            <div className="grid grid-col text-center mt-4 md:mt-0 text-xl">
              <span>
                Logged in as &nbsp;
                <span className='text-green-400'>{currentUser.email}</span>{' '}
              </span>{' '}
              <button
                type="button"
                className="text-red-500 hover:text-red-600"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='text-center md:mt-0 mt-4 hover:text-green-600'>

              <Link to={routes.login()}>Login</Link>
            </div>
          )}
        </div>

        <TodoListsCell />
        <div>

        </div>
      </div>
    </>
  )
}

export default HomePage
