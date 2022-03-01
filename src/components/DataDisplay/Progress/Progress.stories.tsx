import { Meta, Story } from '@storybook/react'

import { Progress } from './Progress'

const meta: Meta = {
  title: `${'Data Display'}/Progress`,
  component: Progress,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value, className = 'w-56', children, ...rest }) => (
  <div className="flex flex-col gap-2">
    <Progress value={value || 0} className={className} {...rest}>
      {children}
    </Progress>
    <Progress value={value || 10} className={className} {...rest}>
      {children}
    </Progress>
    <Progress value={value || 40} className={className} {...rest}>
      {children}
    </Progress>
    <Progress value={value || 70} className={className} {...rest}>
      {children}
    </Progress>
    <Progress value={value || 100} className={className} {...rest}>
      {children}
    </Progress>
  </div>
)

export const Default = Template.bind({})
Default.args = { className: 'w-56' }

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent' }

export const Success = Template.bind({})
Success.args = { variant: 'success' }

export const Info = Template.bind({})
Info.args = { variant: 'info' }

export const Warning = Template.bind({})
Warning.args = { variant: 'warning' }

export const Error = Template.bind({})
Error.args = { variant: 'error' }
