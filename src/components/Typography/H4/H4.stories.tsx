import { Meta, Story } from '@storybook/react'

import { H4 } from './H4'

const meta: Meta = {
  title: `Typography/H4`,
  component: H4,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => (
  <H4 className={className} {...rest}>
    {children}
  </H4>
)

export const Default = Template.bind({})
Default.args = { children: 'Hello world' }
