import { Meta, Story } from '@storybook/react';

import { FormControl } from './FormControl';

const meta: Meta = {
  title: `Data Input/FormControl`,
  component: FormControl,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({className, children, ...rest}) => <FormControl className={className} {...rest}>{children}</FormControl>;

export const Default = Template.bind({});
Default.args = {};
