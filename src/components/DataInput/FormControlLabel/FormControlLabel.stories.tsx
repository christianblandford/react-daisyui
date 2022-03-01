import { Meta, Story } from '@storybook/react'

import { FormControlLabel } from './FormControlLabel'

const meta: Meta = {
  title: `Data Input/FormControlLabel`,
  component: FormControlLabel,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, ...rest }) => (
  <FormControlLabel className={className} {...rest} />
)

export const Default = Template.bind({})
Default.args = {}
