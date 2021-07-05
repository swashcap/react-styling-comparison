import { forwardRef } from "react";
import type { StyleObject } from "styletron-react";

import type { ButtonProps } from "./ButtonTypes";
import { styled } from "../utilities/theme";

const BaseButton = styled<
  "button",
  Omit<ButtonProps, "fluid" | "size" | "variant"> & {
    $fluid: ButtonProps["fluid"];
    $size: ButtonProps["size"];
    $variant: ButtonProps["variant"];
  }
>("button", ({ disabled, $fluid, $size, $theme, $variant }) => {
  const style: StyleObject = {
    borderRadius: $theme.borderRadius[1],
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: disabled ? "default" : "pointer",
    display: "inline-block",
    fontFamily: $theme.fontFamily.sansSerif,
    lineHeight: "1",
    margin: 0,
    textAlign: "center",
  };

  if ($fluid) {
    style.width = "100%";
  }

  if ($size === "large") {
    style.fontSize = $theme.fontSize[4];
    style.padding = `${$theme.space[3]} ${$theme.space[4]}`;
  } else if ($size === "medium") {
    style.fontSize = $theme.fontSize[5];
    style.padding = `${$theme.space[2]} ${$theme.space[3]}`;
  } else {
    style.fontSize = $theme.fontSize[6];
    style.padding = `${$theme.space[1]} ${$theme.space[2]}`;
  }

  if ($variant === "primary") {
    style.background = disabled ? $theme.color.silver : $theme.color.darkBlue;
    style.borderColor = disabled ? $theme.color.silver : $theme.color.darkBlue;
    style.color = $theme.color.white;
    style.fontWeight = $theme.fontWeight[700];

    if (!disabled) {
      style[":focus"] = style[":hover"] = {
        background: $theme.color.navy,
        borderColor: $theme.color.navy,
      };
    }
  } else if ($variant === "secondary") {
    style.background = $theme.color.white;
    style.borderColor = disabled ? $theme.color.silver : $theme.color.midGray;
    style.color = disabled ? $theme.color.silver : $theme.color.midGray;
    style.fontWeight = $theme.fontWeight[700];

    if (!disabled) {
      style[":focus"] = style[":hover"] = {
        borderColor: $theme.color.black,
        color: $theme.color.black,
      };
    }
  } else {
    style.background = $theme.color.white;
    style.borderColor = $theme.color.white;
    style.color = disabled ? $theme.color.silver : $theme.color.midGray;
    style.fontWeight = $theme.fontWeight[400];

    if (!disabled) {
      style[":focus"] = style[":hover"] = {
        color: $theme.color.black,
      };
    }
  }

  return style;
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fluid, size = "small", variant = "secondary", ...rest }, ref) => (
    <BaseButton
      $fluid={fluid}
      $size={size}
      $variant={variant}
      ref={ref}
      {...rest}
    />
  )
);
