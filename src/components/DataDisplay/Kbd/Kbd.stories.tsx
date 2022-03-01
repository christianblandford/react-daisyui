import { Meta, Story } from "@storybook/react";

import { Kbd } from "./Kbd";

const meta: Meta = {
  title: `Data Display/Kbd`,
  component: Kbd,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = ({ className, children, ...rest }) => (
  <Kbd className={className} {...rest}>
    {children}
  </Kbd>
);

export const Default = Template.bind({});
Default.args = { children: "A" };

export const Sizes = () => {
  return (
    <div>
      <Kbd size="lg">Shift</Kbd>
      <Kbd size="md">Shift</Kbd>
      <Kbd size="sm">Shift</Kbd>
      <Kbd size="xs">Shift</Kbd>
    </div>
  );
};

export const InText = () => {
  return (
    <div>
      Press <Kbd size="sm">F</Kbd> to pay respects.
    </div>
  );
};

export const KeyCombination = () => {
  return (
    <div>
      <Kbd>ctrl</Kbd>+<Kbd>shift</Kbd>+<Kbd>del</Kbd>
    </div>
  );
};

export const FunctionKeys = () => {
  return (
    <div>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌃</Kbd>
    </div>
  );
};

export const FullKeyboard = () => {
  return (
    <div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd>q</Kbd>
        <Kbd>w</Kbd>
        <Kbd>e</Kbd>
        <Kbd>r</Kbd>
        <Kbd>t</Kbd>
        <Kbd>y</Kbd>
        <Kbd>u</Kbd>
        <Kbd>i</Kbd>
        <Kbd>o</Kbd>
        <Kbd>p</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd>a</Kbd>
        <Kbd>s</Kbd>
        <Kbd>d</Kbd>
        <Kbd>f</Kbd>
        <Kbd>g</Kbd>
        <Kbd>h</Kbd>
        <Kbd>j</Kbd>
        <Kbd>k</Kbd>
        <Kbd>l</Kbd>
      </div>
      <div className="flex justify-center gap-1 my-1 w-full">
        <Kbd>z</Kbd>
        <Kbd>x</Kbd>
        <Kbd>c</Kbd>
        <Kbd>v</Kbd>
        <Kbd>b</Kbd>
        <Kbd>n</Kbd>
        <Kbd>m</Kbd>
        <Kbd>/</Kbd>
      </div>
    </div>
  );
};

export const ArrowKeys = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <Kbd>▲</Kbd>
      </div>
      <div className="flex justify-center gap-12 w-full">
        <Kbd>◀︎</Kbd>
        <Kbd>▶︎</Kbd>
      </div>
      <div className="flex justify-center w-full">
        <Kbd>▼</Kbd>
      </div>
    </div>
  );
};
