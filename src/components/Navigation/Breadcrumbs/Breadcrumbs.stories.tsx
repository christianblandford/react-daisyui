import { Meta, Story } from '@storybook/react'

import { Breadcrumbs } from './Breadcrumbs'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta = {
  title: `Navigation/Breadcrumbs`,
  component: Breadcrumbs,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = ({ children, ...rest }) => <Breadcrumbs {...rest}>{children}</Breadcrumbs>

export const Default = Template.bind({})
Default.args = {
  children: [
    <Breadcrumb>
      <a>Home</a>
    </Breadcrumb>,
    <Breadcrumb>
      <a>Documents</a>
    </Breadcrumb>,
    <Breadcrumb>Add Documents</Breadcrumb>,
  ],
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  children: [
    <Breadcrumb>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          ></path>
        </svg>
        Home
      </a>
    </Breadcrumb>,
    <Breadcrumb>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 mr-2 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          ></path>
        </svg>
        Documents
      </a>
    </Breadcrumb>,
    <Breadcrumb>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-4 h-4 mr-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
      Add Document
    </Breadcrumb>,
  ],
}

export const MaxWidth = Template.bind({})
MaxWidth.args = {
  className: 'max-w-xs',
  children: [
    <Breadcrumb>
      <a>Home</a>
    </Breadcrumb>,
    <Breadcrumb>
      <a>Documents</a>
    </Breadcrumb>,
    <Breadcrumb>Add Documents</Breadcrumb>,
  ],
}
