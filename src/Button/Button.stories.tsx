import type { HTMLAttributes, FC } from "react";
import { Story } from "@storybook/react";

import { Button as ButtonTachyons } from "./Button.tachyons";
import { Button as ButtonCSSModules } from "./Button.cssmodules";
import { Button as ButtonInline } from "./Button.inline";
import { ButtonProps } from "./ButtonTypes";

const Center: FC<HTMLAttributes<HTMLElement>> = ({ style, ...rest }) => (
  <div
    style={{
      alignItems: "center",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
      minWidth: "100vh",
      padding: "1rem",
      ...style,
    }}
    {...rest}
  />
);

export default {
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Demo button",
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        options: ["large", "medium", "small"],
        type: "radio",
      },
      defaultValue: "large",
    },
    variant: {
      control: {
        options: ["primary", "secondary", "tertiary"],
        type: "radio",
      },
      defaultValue: "primary",
    },
  },
  title: "Button",
};

export const CSSModules: Story<ButtonProps> = (props) => (
  <Center>
    <ButtonCSSModules {...props} />
  </Center>
);

CSSModules.storyName = "CSS Modules";

export const InlineStyles: Story<ButtonProps> = (props) => (
  <Center>
    <ButtonInline {...props} />
  </Center>
);

export const Tachyons: Story<ButtonProps> = (props) => (
  <Center>
    <ButtonTachyons {...props} />
  </Center>
);
