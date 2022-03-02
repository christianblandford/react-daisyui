import { Meta, Story } from '@storybook/react'

import { H1 } from './H1'

const meta: Meta = {
  title: `Typography/H1`,
  component: H1,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => (
  <H1 className={className} {...rest}>
    {children}
  </H1>
)

export const Default = Template.bind({})
Default.args = { children: 'Hello world' }
