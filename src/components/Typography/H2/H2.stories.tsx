import { Meta, Story } from '@storybook/react'

import { H2 } from './H2'

const meta: Meta = {
  title: `Typography/H2`,
  component: H2,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, children, ...rest }) => (
  <H2 className={className} {...rest}>
    {children}
  </H2>
)

export const Default = Template.bind({})
Default.args = { children: 'Hello world' }
