import { Meta, Story } from '@storybook/react'
import { CheckboxProps } from '.'
import { FormControl } from '../FormControl'
import { FormControlLabel } from '../FormControlLabel'

import { Checkbox } from './Checkbox'

const meta: Meta = {
  title: `Data Input/Checkbox`,
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ checked, onChange, className, children, ...rest }) => (
  <Checkbox checked={checked} onChange={onChange} className={className} {...rest}>
    {children}
  </Checkbox>
)

export const Default = Template.bind({})
Default.args = {}

export const WithLabelAndFormControl = ({ variant, checked, onChange, ...rest }: CheckboxProps) => {
  return (
    <FormControl>
      <FormControlLabel
        label="Remember me"
        control={<Checkbox {...rest} variant={variant} checked={checked} onChange={onChange} />}
      />
    </FormControl>
  )
}

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent' }

export const Sizes = ({ variant, checked, onChange, ...rest }: CheckboxProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Checkbox {...rest} size="xs" variant={variant} checked={checked} onChange={onChange} />
      <Checkbox {...rest} size="sm" variant={variant} checked={checked} onChange={onChange} />
      <Checkbox {...rest} size="md" variant={variant} checked={checked} onChange={onChange} />
      <Checkbox {...rest} size="lg" variant={variant} checked={checked} onChange={onChange} />
    </div>
  )
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
