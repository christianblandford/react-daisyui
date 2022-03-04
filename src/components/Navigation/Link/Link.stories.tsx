import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Link } from './Link'

const meta: Meta = {
  title: `Navigation/Link`,
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Link {...rest}>{children}</Link>

export const Default = Template.bind({})
Default.args = { children: `I'm a simple link` }

export const InText: Story = ({ ...rest }) => {
  return (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Wrap text in a "Link" component to make it look like a <Link {...rest}>normal link</Link>{' '}
      again.
    </p>
  )
}

export const Primary = Template.bind({})
Primary.args = { children: `I'm a simple link`, variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { children: `I'm a simple link`, variant: 'secondary' }

export const Accent = Template.bind({})
Accent.args = { children: `I'm a simple link`, variant: 'accent' }

export const Neutral = Template.bind({})
Neutral.args = { children: `I'm a simple link`, variant: 'neutral' }

export const ShowUnderlineOnlyOnHover = Template.bind({})
ShowUnderlineOnlyOnHover.args = { children: `I'm a simple link`, hover: true }
