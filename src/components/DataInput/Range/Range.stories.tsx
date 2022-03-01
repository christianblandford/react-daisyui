import { Meta, Story } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { RangeProps } from '.'

import { Range } from './Range'

const meta: Meta = {
  title: `Data Input/Range`,
  component: Range,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value = 50, onChange, ...rest }) => {
  const [stateVale, setStateValue] = useState<number>(value)

  const handleStateChange = (newValue: number) => {
    setStateValue(newValue)
    onChange(newValue)
  }
  return <Range {...rest} value={stateVale} onChange={handleStateChange} />
}

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent' }

export const Sizes = ({ value = 50, onChange, ...rest }: RangeProps) => {
  const [stateVale, setStateValue] = useState<number>(value)

  const handleStateChange = (newValue: number) => {
    setStateValue(newValue)
    onChange(newValue)
  }
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Range {...rest} size="xs" value={stateVale} onChange={handleStateChange} />
      <Range {...rest} size="sm" value={stateVale} onChange={handleStateChange} />
      <Range {...rest} size="md" value={stateVale} onChange={handleStateChange} />
      <Range {...rest} size="lg" value={stateVale} onChange={handleStateChange} />
    </div>
  )
}
