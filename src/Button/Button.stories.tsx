import React from "react";
import { Story } from "@storybook/react";

import { Button as ButtonTachyons } from "./Button.tachyons";
import { Button as ButtonCSSModules } from "./Button.cssmodules";
import { ButtonProps } from "./ButtonTypes";

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
  <ButtonCSSModules {...props} />
);

CSSModules.storyName = "CSS Modules";

export const Tachyons: Story<ButtonProps> = (props) => (
  <ButtonTachyons {...props} />
);
