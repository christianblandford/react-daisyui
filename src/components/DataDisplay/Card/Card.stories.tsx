import { Meta, Story } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta = {
  title: `Data Display/Card`,
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ children, ...rest }) => (
  <Card {...rest}>
    <Card.Body>{children}</Card.Body>
  </Card>
);

export const Default = Template.bind({});
Default.args = { children: "This is a simple card, text only" };
