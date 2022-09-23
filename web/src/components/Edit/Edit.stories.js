// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Edit {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Edit from './Edit'

export const generated = () => {
  return <Edit />
}

export default {
  title: 'Components/Edit',
  component: Edit,
}
