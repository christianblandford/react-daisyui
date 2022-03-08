import { useEffect } from '@storybook/addons'
import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../../Actions'

import { ButtonGroup } from './ButtonGroup'

const meta: Meta = {
  title: `Layout/ButtonGroup`,
  component: ButtonGroup,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <ButtonGroup {...rest}>{children}</ButtonGroup>

export const Default = Template.bind({})
Default.args = {
  children: [<Button>Item 1</Button>, <Button>Item 2</Button>, <Button>Item 3</Button>],
}

export const CustomOnClickButton = ({ activeIndex, ...rest }) => {
  const [stateIndex, setStateIndex] = useState(activeIndex || 0)

  useEffect(() => {
    setStateIndex(activeIndex)
  }, [activeIndex])

  const handleClick = () => {
    alert('Clicked!')
  }

  return (
    <ButtonGroup activeIndex={stateIndex}>
      <Button>Default Button</Button>
      <Button>Default Button</Button>
      <Button onClick={handleClick}>Click me!</Button>
      <Button>Default Button</Button>
    </ButtonGroup>
  )
}
