import { render } from '@redwoodjs/testing/web'

import TodoListPage from './TodoListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TodoListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodoListPage />)
    }).not.toThrow()
  })
})
