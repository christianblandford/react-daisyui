import { useEffect } from '@storybook/addons'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'

import { Rating } from './Rating'

const meta: Meta = {
  title: `Data Input/Rating`,
  component: Rating,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ value, children, ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  return <Rating {...rest} value={stateVal} onChange={setStateVal} />
}

export const Default = Template.bind({})
Default.args = { value: 3.5 }

export const RoundDown = Template.bind({})
RoundDown.args = { value: 3.5, round: 'down' }

export const RoundUp = Template.bind({})
RoundUp.args = { value: 3.1, round: 'up' }

export const Halves = Template.bind({})
Halves.args = { value: 3.3, halves: true }

export const RoundedDownToClosestHalf = Template.bind({})
RoundedDownToClosestHalf.args = { value: 3.8, halves: true, round: 'down' }

export const RoundedUpToClosestHalf = Template.bind({})
RoundedUpToClosestHalf.args = { value: 3.2, halves: true, round: 'up' }

export const MaskStar2WithWarningColor = Template.bind({})
MaskStar2WithWarningColor.args = {
  value: 3.2,
  shape: 'star-2',
  innerClassName: 'bg-warning',
}

export const MaskHeartWithMultipleColors = Template.bind({})
MaskHeartWithMultipleColors.args = {
  value: 3.2,
  shape: 'heart',
  className: 'gap-1',
  innerClassNames: ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-lime-400', 'bg-green-400'],
}

export const MaskStar2WithGreen500Color = Template.bind({})
MaskStar2WithGreen500Color.args = {
  value: 3.2,
  shape: 'star-2',
  innerClassName: 'bg-green-500',
}
MaskStar2WithGreen500Color.storyName = 'Mask star-2 With green-500 Color'

export const Sizes: Story = ({ value, onChange, innerClassName = 'bg-orange-400', ...rest }) => {
  const [stateVal, setStateVal] = useState(value)

  useEffect(() => {
    setStateVal(value)
  }, [value])

  return (
    <div className="w-full h-96 flex flex-col items-center justify-center gap-2">
      <Rating {...rest} value={stateVal} onChange={setStateVal} size="xs" />
      <Rating {...rest} value={stateVal} onChange={setStateVal} size="sm" />
      <Rating {...rest} value={stateVal} onChange={setStateVal} size="md" />
      <Rating {...rest} value={stateVal} onChange={setStateVal} size="lg" />
    </div>
  )
}

export const Clearable = Template.bind({})
Clearable.args = {
  isClearable: true,
  value: 3.2,
}
