import type { Story } from "@storybook/react";

import { Box as BoxEmotion } from "./Box.emotion";
import { Box as BoxStyletron } from "./Box.styletron";
import { BoxProps } from "./BoxTypes";

export default {
  argTypes: {
    as: {
      control: {
        options: ["div", "span"],
        type: "radio",
      },
      defaultValue: "div",
    },
    children: {
      control: {
        type: "text",
      },
      defaultValue: "Box",
    },
    ma: {
      control: {
        max: 4,
        min: 0,
        type: "number",
      },
      defaultValue: 0,
      name: "Margin all",
    },
    pa: {
      control: {
        max: 4,
        min: 0,
        type: "number",
      },
      defaultValue: 0,
      name: "Padding all",
    },
  },
  title: "Box",
};

export const Emotion: Story<BoxProps<any>> = (props) => (
  <BoxEmotion {...props} />
);

export const Styletron: Story<BoxProps<any>> = (props) => (
  <BoxStyletron {...props} />
);
