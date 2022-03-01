import { Meta, Story } from '@storybook/react'

import { Mask } from './Mask'

const meta: Meta = {
  title: `Layout/Mask`,
  component: Mask,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ shape, className, children, ...rest }) => (
  <Mask shape={shape} {...rest}>
    <img src="https://api.lorem.space/image/shoes?w=160&h=160" />
  </Mask>
)

export const Squircle = Template.bind({})
Squircle.args = { shape: 'squircle' }

export const Heart = Template.bind({})
Heart.args = { shape: 'heart' }

export const Hexagon = Template.bind({})
Hexagon.args = { shape: 'hexagon' }

export const Hexagon2 = Template.bind({})
Hexagon2.args = { shape: 'hexagon-2' }

export const Decagon = Template.bind({})
Decagon.args = { shape: 'decagon' }

export const Pentagon = Template.bind({})
Pentagon.args = { shape: 'pentagon' }

export const Diamond = Template.bind({})
Diamond.args = { shape: 'diamond' }

export const Square = Template.bind({})
Square.args = { shape: 'square' }

export const Circle = Template.bind({})
Circle.args = { shape: 'circle' }

export const Parallelogram = Template.bind({})
Parallelogram.args = { shape: 'parallelogram' }

export const Parallelogram2 = Template.bind({})
Parallelogram2.args = { shape: 'parallelogram-2' }

export const Parallelogram3 = Template.bind({})
Parallelogram3.args = { shape: 'parallelogram-3' }

export const Parallelogram4 = Template.bind({})
Parallelogram4.args = { shape: 'parallelogram-4' }

export const Star = Template.bind({})
Star.args = { shape: 'star' }

export const Star2 = Template.bind({})
Star2.args = { shape: 'star-2' }

export const Triangle = Template.bind({})
Triangle.args = { shape: 'triangle' }

export const Triangle2 = Template.bind({})
Triangle2.args = { shape: 'triangle-2' }

export const Triangle3 = Template.bind({})
Triangle3.args = { shape: 'triangle-3' }

export const Triangle4 = Template.bind({})
Triangle4.args = { shape: 'triangle-4' }
