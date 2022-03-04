import { useEffect } from '@storybook/addons'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { TextInput } from './TextInput'

const meta: Meta = {
  title: `Data Input/TextInput`,
  component: TextInput,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value, onChange, placeholder = 'Type here', children, ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  return (
    <TextInput
      value={stateVal}
      onChange={(e) => setStateVal(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithBorder = Template.bind({})
WithBorder.args = { bordered: true }

export const Ghost = Template.bind({})
Ghost.args = { variant: 'ghost' }
Ghost.storyName = 'Ghost (no background)'

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent' }

export const Info = Template.bind({})
Info.args = { variant: 'info' }

export const Success = Template.bind({})
Success.args = { variant: 'success' }

export const Warning = Template.bind({})
Warning.args = { variant: 'warning' }

export const Error = Template.bind({})
Error.args = { variant: 'error' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
