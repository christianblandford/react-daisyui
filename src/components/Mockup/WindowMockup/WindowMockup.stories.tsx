import { Meta, Story } from '@storybook/react'

import { WindowMockup } from './WindowMockup'

const meta: Meta = {
  title: `Mockup/WindowMockup`,
  component: WindowMockup,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <WindowMockup {...rest}>{children}</WindowMockup>

export const Default = Template.bind({})
Default.args = { children: 'Hello!' }

export const WithBackgroundColor = Template.bind({})
WithBackgroundColor.args = {
  children: 'Hello!',
  className: 'bg-base-300',
  innerClassName: 'flex justify-center bg-base-200',
}
