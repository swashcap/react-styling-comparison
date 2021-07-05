import { forwardRef } from "react";
import type { StyleObject } from "styletron-react";
import { useStyletron } from "styletron-react";

import type { ButtonProps } from "./ButtonTypes";
import { useTheme } from "../utilities/theme";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { disabled, fluid, size = "small", variant = "secondary", ...rest },
    ref
  ) => {
    const [css] = useStyletron();
    const theme = useTheme();
    const { color, fontSize, fontWeight, space } = theme;

    const style: StyleObject = {
      borderRadius: theme.borderRadius[1],
      borderStyle: "solid",
      borderWidth: "1px",
      cursor: disabled ? "default" : "pointer",
      display: "inline-block",
      fontFamily: theme.fontFamily.sansSerif,
      lineHeight: theme.lineHeight.solid,
      margin: 0,
      textAlign: "center",
    };

    if (fluid) {
      style.width = "100%";
    }

    if (size === "large") {
      style.fontSize = fontSize[4];
      style.padding = `${space[3]} ${space[4]}`;
    } else if (size === "medium") {
      style.fontSize = fontSize[5];
      style.padding = `${space[2]} ${space[3]}`;
    } else {
      style.fontSize = fontSize[6];
      style.padding = `${space[1]} ${space[2]}`;
    }

    if (variant === "primary") {
      style.background = style.borderColor = disabled
        ? color.silver
        : color.darkBlue;
      style.color = color.white;
      style.fontWeight = fontWeight[700];

      if (!disabled) {
        style[":focus"] = style[":hover"] = {
          background: color.navy,
          borderColor: color.navy,
        };
      }
    } else if (variant === "secondary") {
      style.background = color.white;
      style.borderColor = style.color = disabled ? color.silver : color.midGray;
      style.fontWeight = fontWeight[700];

      if (!disabled) {
        style[":focus"] = style[":hover"] = {
          borderColor: color.black,
          color: color.black,
        };
      }
    } else {
      style.background = style.borderColor = color.white;
      style.color = disabled ? color.silver : color.midGray;
      style.fontWeight = fontWeight[400];

      if (!disabled) {
        style[":focus"] = style[":hover"] = {
          color: color.black,
        };
      }
    }

    return (
      <button
        className={css(style)}
        disabled={disabled}
        ref={ref}
        type="button"
        {...rest}
      />
    );
  }
);
