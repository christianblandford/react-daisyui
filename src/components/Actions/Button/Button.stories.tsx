import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { Meta, Story } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta = {
  title: "Actions/Button",
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ children = "Button", ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export const BrandColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};

export const StateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button variant="info">info</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="error">error</Button>
    </div>
  );
};

export const Outline = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button outline>Default</Button>
      <Button outline variant="primary">
        Primary
      </Button>
      <Button outline variant="secondary">
        Secondary
      </Button>
      <Button outline variant="accent">
        Accent
      </Button>
    </div>
  );
};

export const OutlineWithStateColors = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button outline variant="info">
        info
      </Button>
      <Button outline variant="success">
        success
      </Button>
      <Button outline variant="warning">
        warning
      </Button>
      <Button outline variant="error">
        error
      </Button>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button size="lg">lg</Button>
      <Button>Default</Button>
      <Button size="sm">sm</Button>
      <Button size="xs">xs</Button>
    </div>
  );
};

export const Wide = Template.bind({});
Wide.args = { children: "Wide Button", wide: true };

export const Icon = Template.bind({});
Icon.args = {
  children: "Button With Icon",
  icon: <ClipboardCheckIcon className="h-6 w-6" />,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading Button",
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
};

export const NoClickAnimation = Template.bind({});
NoClickAnimation.args = {
  children: "No Click Animation",
  noAnimation: true,
};
