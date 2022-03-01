import { Card } from '@/components'
import { Meta, Story } from '@storybook/react'

import { Divider } from './Divider'

const meta: Meta = {
  title: `Layout/Divider`,
  component: Divider,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, ...rest }) => (
  <div className="flex flex-col w-full border-opacity-50">
    <Card className="grid h-20 bg-base-300 place-items-center">content</Card>
    <Divider {...rest} />
    <Card className="grid h-20 bg-base-300 place-items-center">content</Card>
  </div>
)

export const Default = Template.bind({})
Default.args = { text: 'OR' }

export const Horizontal = Template.bind({})
Default.args = { text: 'OR', horizontal: true }

export const NoText = Template.bind({})
Default.args = { horizontal: true }
