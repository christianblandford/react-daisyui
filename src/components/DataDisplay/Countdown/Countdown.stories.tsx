import { Meta, Story } from "@storybook/react";

import { Countdown } from "./Countdown";

const meta: Meta = {
  title: `Data Display/Countdown`,
  component: Countdown,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ value, className, ...rest }) => (
  <Countdown value={value} className={className} {...rest}></Countdown>
);

export const Default = Template.bind({});
Default.args = {};
