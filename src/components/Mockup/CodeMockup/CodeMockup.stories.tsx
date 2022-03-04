import { Meta, Story } from '@storybook/react'

import { CodeMockup } from './CodeMockup'

const meta: Meta = {
  title: `Mockup/CodeMockup`,
  component: CodeMockup,
  subcomponents: { 'CodeMockup.Line': CodeMockup.Line },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <CodeMockup {...rest}>{children}</CodeMockup>

export const Default = Template.bind({})
Default.args = {
  children: <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>,
}

export const LinePrefix = Template.bind({})
LinePrefix.args = {
  children: <CodeMockup.Line prefix="$">yarn add daisyui react-daisyui</CodeMockup.Line>,
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  children: [
    <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>,
    <CodeMockup.Line className="text-warning">installing...</CodeMockup.Line>,
    <CodeMockup.Line className="text-success">Done!</CodeMockup.Line>,
  ],
}

export const HighlightedLine = Template.bind({})
HighlightedLine.args = {
  children: [
    <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>,
    <CodeMockup.Line className="text-warning">installing...</CodeMockup.Line>,
    <CodeMockup.Line warning>Error!</CodeMockup.Line>,
  ],
}

export const LongLineWithScroll = Template.bind({})
LongLineWithScroll.args = {
  children: (
    <CodeMockup.Line prefix="~">
      Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore
      ratione.
    </CodeMockup.Line>
  ),
}

export const WithoutPrefix = Template.bind({})
WithoutPrefix.args = {
  children: <CodeMockup.Line prefix={false}>without prefix</CodeMockup.Line>,
}
