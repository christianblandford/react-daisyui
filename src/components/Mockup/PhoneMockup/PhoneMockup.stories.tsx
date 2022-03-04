import { Meta, Story } from '@storybook/react'

import { PhoneMockup } from './PhoneMockup'

const meta: Meta = {
  title: `Mockup/PhoneMockup`,
  component: PhoneMockup,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <PhoneMockup {...rest}>{children}</PhoneMockup>

export const Default = Template.bind({})
Default.args = { children: 'Hi.' }

export const WithColor = Template.bind({})
WithColor.args = {
  children: 'Hi.',
  variant: 'primary',
}
