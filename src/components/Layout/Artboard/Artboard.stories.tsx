import { Meta, Story } from '@storybook/react'

import { Artboard } from './Artboard'

const meta: Meta = {
  title: `Layout/Artboard`,
  component: Artboard,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Artboard {...rest}>{children}</Artboard>

export const Default = Template.bind({})
Default.args = {}

export const Size1 = Template.bind({})
Size1.args = { size: 1, children: '320x568' }

export const Size2 = Template.bind({})
Size2.args = { size: 2, children: '375×667' }

export const Size3 = Template.bind({})
Size3.args = { size: 3, children: '414×736' }

export const Size4 = Template.bind({})
Size4.args = { size: 4, children: '375×812' }

export const Size5 = Template.bind({})
Size5.args = { size: 5, children: '414×896' }

export const Size6 = Template.bind({})
Size6.args = { size: 6, children: '320×1024' }

export const HorizontalSize1 = Template.bind({})
HorizontalSize1.args = { size: 1, horizontal: true, children: '568×320' }

export const HorizontalSize2 = Template.bind({})
HorizontalSize2.args = { size: 2, horizontal: true, children: '667×375' }

export const HorizontalSize3 = Template.bind({})
HorizontalSize3.args = { size: 3, horizontal: true, children: '736×414' }

export const HorizontalSize4 = Template.bind({})
HorizontalSize4.args = { size: 4, horizontal: true, children: '812×375' }

export const HorizontalSize5 = Template.bind({})
HorizontalSize5.args = { size: 5, horizontal: true, children: '896×414' }

export const HorizontalSize6 = Template.bind({})
HorizontalSize6.args = { size: 6, horizontal: true, children: '1024×320' }
