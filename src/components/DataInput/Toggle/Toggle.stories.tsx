import { Meta, Story } from '@storybook/react'
import { ToggleProps } from '.'
import { FormControl, FormControlLabel } from '..'

import { Toggle } from './Toggle'

const meta: Meta = {
  title: `Data Input/Toggle`,
  component: Toggle,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ checked, onChange, className, children, ...rest }) => (
  <Toggle checked={checked} onChange={onChange} className={className} {...rest}>
    {children}
  </Toggle>
)

export const Default = Template.bind({})
Default.args = {}

export const WithLabelAndFormControl = ({ variant, checked, onChange, ...rest }: ToggleProps) => {
  return (
    <FormControl>
      <FormControlLabel
        label="Remember me"
        control={<Toggle {...rest} variant={variant} checked={checked} onChange={onChange} />}
      />
    </FormControl>
  )
}

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', checked: true }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', checked: true }

export const Accent = Template.bind({})
Accent.args = { variant: 'accent', checked: true }

export const Sizes = ({ variant, checked, onChange, ...rest }: ToggleProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <Toggle {...rest} size="xs" variant={variant} checked={checked} onChange={onChange} />
      <Toggle {...rest} size="sm" variant={variant} checked={checked} onChange={onChange} />
      <Toggle {...rest} size="md" variant={variant} checked={checked} onChange={onChange} />
      <Toggle {...rest} size="lg" variant={variant} checked={checked} onChange={onChange} />
    </div>
  )
}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const DisabledAndChecked = Template.bind({})
DisabledAndChecked.args = { disabled: true, checked: true }
