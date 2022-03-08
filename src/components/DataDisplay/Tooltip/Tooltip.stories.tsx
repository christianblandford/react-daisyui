import { Meta, Story } from '@storybook/react'

import { Tooltip } from './Tooltip'

const meta: Meta = {
  title: `Data Display/Tooltip`,
  component: Tooltip,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Tooltip {...rest}>{children}</Tooltip>

export const Default = Template.bind({})
Default.args = {}
