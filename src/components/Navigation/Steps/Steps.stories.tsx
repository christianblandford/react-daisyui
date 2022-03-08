import { Meta, Story } from '@storybook/react'

import { Steps } from './Steps'
import { Step } from './Step'

const meta: Meta = {
  title: `Navigation/Steps`,
  component: Steps,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Steps {...rest}>{children}</Steps>

export const Default = Template.bind({})
Default.args = {
  children: [
    <Step variant="primary">Register</Step>,
    <Step variant="primary">Choose plan</Step>,
    <Step>Purchase</Step>,
    <Step>Receive Product</Step>,
  ],
}

export const Vertical = Template.bind({})
Vertical.args = {
  vertical: true,
  children: [
    <Step variant="primary">Register</Step>,
    <Step variant="primary">Choose plan</Step>,
    <Step>Purchase</Step>,
    <Step>Receive Product</Step>,
  ],
}

export const Responsive = Template.bind({})
Responsive.args = {
  className: 'lg:steps-horizontal',
  vertical: true,
  children: [
    <Step variant="primary">Register</Step>,
    <Step variant="primary">Choose plan</Step>,
    <Step>Purchase</Step>,
    <Step>Receive Product</Step>,
  ],
}

export const WithCustomContent = Template.bind({})
WithCustomContent.args = {
  children: [
    <Step variant="primary" content="?">
      Step 1
    </Step>,
    <Step variant="primary" content="!">
      Step 2
    </Step>,
    <Step content="★">Step 3</Step>,
    <Step content="●">Step 4</Step>,
  ],
}
