import { render } from '@redwoodjs/testing/web'

import Edit from './Edit'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Edit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Edit />)
    }).not.toThrow()
  })
})
