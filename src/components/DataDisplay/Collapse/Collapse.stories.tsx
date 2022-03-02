import { Meta, Story } from '@storybook/react'

import { Collapse } from './Collapse'

const meta: Meta = {
  title: `Data Display/Collapse`,
  component: Collapse,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Collapse {...rest}>{children}</Collapse>

export const ToggleWithFocus = Template.bind({})
ToggleWithFocus.args = {
  focusOpens: true,
  blurCloses: true,
  clickCloses: false,
  clickOpens: false,
  children: (
    <>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>
        Clicking the title does not close me. Click somewhere else to close me.
      </Collapse.Content>
    </>
  ),
}

export const ToggleWithClick = Template.bind({})
ToggleWithClick.args = {
  focusOpens: false,
  blurCloses: false,
  children: (
    <>
      <Collapse.Title>Click me to show/hide content</Collapse.Title>
      <Collapse.Content>Focus/blur does nothing to me</Collapse.Content>
    </>
  ),
}

export const ToggleWithFocusOrClick = Template.bind({})
ToggleWithFocusOrClick.args = {
  blurCloses: true,
  children: (
    <>
      <Collapse.Title>Click or focus/blur me to show/hide content</Collapse.Title>
      <Collapse.Content>Clicking the title again, or anywhere else closes me</Collapse.Content>
    </>
  ),
}

export const WithBorderAndBackgroundColor = Template.bind({})
WithBorderAndBackgroundColor.args = {
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: (
    <>
      <Collapse.Title>Click or Focus me to see content</Collapse.Title>
      <Collapse.Content>
        Notice that only clicking the title again will close, while focusing still opens it.
        Collapses are customizable like that.
      </Collapse.Content>
    </>
  ),
}

export const WithArrowIcon = Template.bind({})
WithArrowIcon.args = {
  arrow: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: (
    <>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>This is some content</Collapse.Content>
    </>
  ),
}

export const WithPlusMinusIcon = Template.bind({})
WithPlusMinusIcon.args = {
  plus: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: (
    <>
      <Collapse.Title>Focus me to see content</Collapse.Title>
      <Collapse.Content>This is some content</Collapse.Content>
    </>
  ),
}
WithPlusMinusIcon.storyName = 'With Arrow Plus/Minus Icon'

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  forceOpen: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: (
    <>
      <Collapse.Title>I have forceOpen prop set to true</Collapse.Title>
      <Collapse.Content>You cannot close me</Collapse.Content>
    </>
  ),
}

export const ForceClose = Template.bind({})
ForceClose.args = {
  forceClose: true,
  className: 'border border-base-300 bg-base-100 rounded-box',
  children: (
    <>
      <Collapse.Title>I have forceClose prop set to true</Collapse.Title>
      <Collapse.Content>You cannot open me (not that you will even see this...)</Collapse.Content>
    </>
  ),
}
