import { Meta, Story } from '@storybook/react'

import { Prose } from './Prose'

const meta: Meta = {
  title: `Typography/Prose`,
  component: Prose,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ className, ...rest }) => (
  <Prose className={className} {...rest}>
    <div>
      <h1>This is a prose h1</h1>
      <h2>This is an h2</h2>
      <h3>I'm an h3</h3>
      <p>This is a normal p tag, but inside of a prose block</p>
    </div>
  </Prose>
)

export const Default = Template.bind({})
Default.args = {}
