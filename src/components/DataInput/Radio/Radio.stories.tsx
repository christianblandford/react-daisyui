import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { FormControl, FormControlLabel } from '..'

import { Radio, RadioProps } from './Radio'

const meta: Meta = {
  title: `Data Input/Radio`,
  component: Radio,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ checked, onChange, className, ...rest }) => (
  <Radio name="radio" checked={true} onChange={onChange} className={className} {...rest} />
)

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent' }

export const Sizes = ({ variant, checked, onChange, ...rest }: RadioProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Radio {...rest} size="xs" variant={variant} checked={checked} onChange={onChange} />
      <Radio {...rest} size="sm" variant={variant} checked={checked} onChange={onChange} />
      <Radio {...rest} size="md" variant={variant} checked={checked} onChange={onChange} />
      <Radio {...rest} size="lg" variant={variant} checked={checked} onChange={onChange} />
    </div>
  )
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const WithLabelAndFormControlAndCustomColors = ({ ...rest }: RadioProps) => {
  const [checked, setChecked] = useState<null | string>()
  const handleCheck = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e)
    const target = e.target as HTMLInputElement
    setChecked(target.name)
  }
  return (
    <div className="flex flex-col gap-4">
      <FormControl>
        <FormControlLabel
          label="Red pill"
          control={
            <Radio
              {...rest}
              name="redPill"
              className="checked:bg-red-500"
              checked={checked === 'redPill'}
              onChange={handleCheck}
            />
          }
        />
      </FormControl>
      <FormControl>
        <FormControlLabel
          label="Blue pill"
          control={
            <Radio
              {...rest}
              name="bluePill"
              className="checked:bg-blue-500"
              checked={checked === 'bluePill'}
              onChange={handleCheck}
            />
          }
        />
      </FormControl>
    </div>
  )
}
