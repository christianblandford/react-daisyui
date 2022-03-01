import clsx from "clsx";
import * as React from "react";

const kbdSizes = {
  xs: "kbd-xs",
  sm: "kbd-sm",
  md: "kbd-md",
  lg: "kbd-lg",
};

export type KbdProps = {
  children?: React.ReactNode;
  size?: keyof typeof kbdSizes;
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Kbd = ({ size, children, className, ...rest }: KbdProps) => {
  return (
    <kbd {...rest} className={clsx(className, "kbd", size && kbdSizes[size])}>
      {children}
    </kbd>
  );
};
