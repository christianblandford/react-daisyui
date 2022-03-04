import React from 'react'
import { Meta, Story } from '@storybook/react'
import { useState, useEffect } from 'react'
import { useInterval } from '@/hooks/useInterval'
import { Countdown } from './Countdown'

const meta: Meta = {
  title: `Data Display/Countdown`,
  component: Countdown,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value, className, ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useInterval(() => {
    if (stateVal > 0) {
      setStateVal(stateVal - 1)
    } else {
      setStateVal(value - 1)
    }
  }, 1000)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  return <Countdown value={stateVal} className={className} {...rest}></Countdown>
}

export const Default = Template.bind({})
Default.args = { value: 59 }
