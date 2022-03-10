import { Meta, Story } from '@storybook/react'

import { Menu } from './Menu'

const meta: Meta = {
  title: `Navigation/Menu`,
  component: Menu,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Menu {...rest}>{children}</Menu>

export const Default = Template.bind({})
Default.args = {
  className: 'w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const WithActiveItem = Template.bind({})
WithActiveItem.args = {
  className: 'w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item active>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const WithRoundedCorner = Template.bind({})
WithRoundedCorner.args = {
  className: 'w-56',
  rounded: true,
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const WithPadding = Template.bind({})
WithPadding.args = {
  className: 'rounded-box p-2 w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  className: 'rounded-box p-2 w-96',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const AutoWidth = Template.bind({})
AutoWidth.args = {
  className: 'p-2 w-auto',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const ItemWithBorder = Template.bind({})
ItemWithBorder.args = {
  className: 'p-2 w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item bordered>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const ItemsBordered = Template.bind({})
ItemsBordered.args = {
  borderedItems: true,
  className: 'w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const ItemWithBorderOnHover = Template.bind({})
ItemWithBorderOnHover.args = {
  className: 'p-2 w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item borderedOnHover>Hover me</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const ItemsBorderedOnHover = Template.bind({})
ItemsBorderedOnHover.args = {
  borderedItemsOnHover: true,
  className: 'w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const DisabledItem = Template.bind({})
DisabledItem.args = {
  className: 'p-2 w-56',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item disabled>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const DisabledMenu = Template.bind({})
DisabledMenu.args = {
  disabled: true,
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const Compact = Template.bind({})
Compact.args = {
  compact: true,
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const CompactResponsive = Template.bind({})
CompactResponsive.args = {
  compact: true,
  className: 'lg:menu-normal',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  horizontal: true,
  rounded: true,
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}
export const HorizonalResponsive = Template.bind({})
HorizonalResponsive.args = {
  className: 'lg:menu-horizontal',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const HorizontalDefinedWidth = Template.bind({})
HorizontalDefinedWidth.args = {
  className: 'w-56',
  horizontal: true,
  rounded: true,
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  rounded: true,
  children: [
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      }
    >
      Item 1
    </Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      Item 2
    </Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
    >
      Item 3
    </Menu.Item>,
  ],
}

export const OnlyIcons = Template.bind({})
OnlyIcons.args = {
  rounded: true,
  children: [
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
    ></Menu.Item>,
  ],
}

export const OnlyIconsHorizontal = Template.bind({})
OnlyIconsHorizontal.args = {
  rounded: true,
  horizontal: true,
  children: [
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
    ></Menu.Item>,
  ],
}
OnlyIconsHorizontal.storyName = 'Only Icons (horizontal)'

export const OnlyIconsWithPadding = Template.bind({})
OnlyIconsWithPadding.args = {
  rounded: true,
  className: 'p-2',
  children: [
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    ></Menu.Item>,
    <Menu.Item
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      }
    ></Menu.Item>,
  ],
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  rounded: true,
  className: 'w-56 bg-secondary text-secondary-content p-2',
  children: [
    <Menu.Item>Item 1</Menu.Item>,
    <Menu.Item>Item 2</Menu.Item>,
    <Menu.Item>Item 3</Menu.Item>,
  ],
}
