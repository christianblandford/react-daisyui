import { Meta, Story } from '@storybook/react';

import { InputGroup } from './InputGroup';

const meta: Meta = {
  title: `Layout/InputGroup`,
  component: InputGroup,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({className, children, ...rest}) => <InputGroup className={className} {...rest}>{children}</InputGroup>;

export const Default = Template.bind({});
Default.args = {};
