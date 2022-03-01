import { XIcon } from "@heroicons/react/outline";
import { Meta, Story } from "@storybook/react";

import { Badge } from "./Badge";

const meta: Meta = {
  title: `Data Display/Badge`,
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Badge {...props}>Hello</Badge>;

export const Default = Template.bind({});
Default.args = {};

export const BrandColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  );
};

export const StateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Badge variant="info">info</Badge>
      <Badge variant="success">success</Badge>
      <Badge variant="warning">warning</Badge>
      <Badge variant="error">error</Badge>
    </div>
  );
};

export const Outline = () => {
  return (
    <div className="flex flex-row gap-2">
      <Badge outline>Default</Badge>
      <Badge outline variant="primary">
        Primary
      </Badge>
      <Badge outline variant="secondary">
        Secondary
      </Badge>
      <Badge outline variant="accent">
        Accent
      </Badge>
    </div>
  );
};

export const OutlineWithStateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Badge outline variant="info">
        <span>info</span>
      </Badge>
      <Badge outline variant="success">
        <span>success</span>
      </Badge>
      <Badge outline variant="warning">
        <span>warning</span>
      </Badge>
      <Badge outline variant="error">
        <span>error</span>
      </Badge>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="flex flex-row gap-2">
      <Badge size="lg">lg</Badge>
      <Badge>Default</Badge>
      <Badge size="sm">sm</Badge>
      <Badge size="xs">xs</Badge>
    </div>
  );
};

export const WithIcon = () => {
  const removeIcon = <XIcon className="w-4 h-4" />;
  return (
    <div className="flex flex-row gap-2">
      <Badge icon={removeIcon} iconPosition="start">
        Remove Item
      </Badge>
      <Badge icon={removeIcon} iconPosition="end">
        Remove Item
      </Badge>
      <Badge icon={removeIcon} iconPosition="end" iconGap="8">
        Remove Item with gap
      </Badge>
    </div>
  );
};
