import { Meta, Story } from '@storybook/react'

import { Dropdown } from './Dropdown'
import { Button } from '../Button'
import { Menu } from '../../Navigation'

const meta: Meta = {
  title: `Actions/Dropdown`,
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Dropdown {...rest}>{children}</Dropdown>

export const Default = Template.bind({})
Default.args = {
  children: [
    <Dropdown.Trigger>Click</Dropdown.Trigger>,
    <Dropdown.Content>
      <Menu className="w-56" rounded>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    </Dropdown.Content>,
  ],
}

export const LabelButton = Template.bind({})
LabelButton.args = {
  children: [
    <Dropdown.Trigger>
      <Button variant="primary">Click</Button>
    </Dropdown.Trigger>,
    <Dropdown.Content>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </Dropdown.Content>,
  ],
}

export const ForceOpen = Template.bind({})
ForceOpen.args = {
  forceOpen: true,
  children: [
    <Dropdown.Trigger>
      <Button variant="primary">Click</Button>
    </Dropdown.Trigger>,
    <Dropdown.Content>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </Dropdown.Content>,
  ],
}

export const OpenOnHover = Template.bind({})
OpenOnHover.args = {
  hoverOpens: true,
  children: [
    <Dropdown.Trigger>
      <Button variant="primary">Click</Button>
    </Dropdown.Trigger>,
    <Dropdown.Content>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </Dropdown.Content>,
  ],
}

export const OpenOnFocus = Template.bind({})
OpenOnFocus.args = {
  clickOpens: false,
  clickCloses: false,
  focusOpens: true,
  blurCloses: true,
  children: [
    <Dropdown.Trigger>
      <Button variant="primary">Focus</Button>
    </Dropdown.Trigger>,
    <Dropdown.Content>
      <Menu className="w-56" rounded>
        <Menu.Item>Item 1</Menu.Item>
        <Menu.Item>Item 2</Menu.Item>
        <Menu.Item>Item 3</Menu.Item>
      </Menu>
    </Dropdown.Content>,
  ],
}

export const OpenOnFocus2 = Template.bind({})
OpenOnFocus2.args = {
  clickOpens: false,
  clickCloses: false,
  focusOpens: true,
  blurCloses: true,
  children: [
    <Dropdown.Trigger>
      <Button variant="primary">Focus</Button>
    </Dropdown.Trigger>,
    <Dropdown.Content>
      <div>Test1</div>
      <div>Test2</div>
      <div>Test3</div>
    </Dropdown.Content>,
  ],
}

export const OpenOnFocus3 = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="dropdown dropdown-end" onFocus={() => console.log('I have focus')}>
        <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </label>
        <div
          tabIndex={0}
          className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
        >
          <div className="card-body">
            <h2 className="card-title">You needed more info?</h2>
            <p>Here is a description!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const OpenOnFocus4 = () => {
  return (
    <div className="flex flex-col gap-8">
      <Dropdown>
        <Dropdown.Trigger>
          <Button variant="primary">Focus</Button>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Menu className="w-56" rounded>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </Dropdown.Content>
      </Dropdown>
      <Button id="focusNext">Focus me next</Button>
    </div>
  )
}
