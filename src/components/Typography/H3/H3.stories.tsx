import { Meta, Story } from '@storybook/react'

import { H3 } from './H3'

const meta: Meta = {
  title: `Typography/H3`,
  component: H3,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => (
  <H3 className={className} {...rest}>
    {children}
  </H3>
)

export const Default = Template.bind({})
Default.args = { children: 'Hello world' }
