import { forwardRef } from "react";

import type { ButtonProps } from "./ButtonTypes";
import { styled } from "../utilities/theme";

const BaseButton = styled<
  "button",
  Omit<ButtonProps, "fluid" | "size" | "variant"> & {
    $fluid: ButtonProps["fluid"];
    $size: ButtonProps["size"];
    $variant: ButtonProps["variant"];
  }
>("button", ({ disabled, $fluid, $size, $theme, $variant }) => ({
  background:
    $variant === "primary"
      ? disabled
        ? $theme.color.silver
        : $theme.color.darkBlue
      : $theme.color.white,
  borderRadius: ".125rem",
  borderColor:
    $variant === "primary"
      ? disabled
        ? $theme.color.silver
        : $theme.color.darkBlue
      : $variant === "secondary"
      ? disabled
        ? $theme.color.silver
        : $theme.color.midGray
      : $theme.color.white,
  borderStyle: "solid",
  borderWidth: "1px",
  color:
    $variant === "primary"
      ? $theme.color.white
      : disabled
      ? $theme.color.silver
      : $theme.color.midGray,
  cursor: disabled ? "default" : "pointer",
  display: "inline-block",
  fontFamily: $theme.fontFamily.sansSerif,
  fontSize:
    $size === "large"
      ? $theme.fontSize[4]
      : $size === "medium"
      ? $theme.fontSize[5]
      : $theme.fontSize[6],
  fontWeight: $variant === "tertiary" ? 400 : 700,
  lineHeight: "1",
  margin: 0,
  padding:
    $size === "large"
      ? `${$theme.space.medium} ${$theme.space.large}`
      : $size === "medium"
      ? `${$theme.space.small} ${$theme.space.medium}`
      : `${$theme.space.extraSmall} ${$theme.space.small}`,
  textAlign: "center",
  width: $fluid ? "100%" : undefined,
  ":focus": disabled
    ? undefined
    : {
        background: $variant === "primary" ? $theme.color.navy : undefined,
        borderColor:
          $variant === "primary"
            ? $theme.color.navy
            : $variant === "secondary"
            ? $theme.color.black
            : undefined,
        color: $variant == "primary" ? undefined : $theme.color.black,
      },
  ":hover": disabled
    ? undefined
    : {
        background: $variant === "primary" ? $theme.color.navy : undefined,
        borderColor:
          $variant === "primary"
            ? $theme.color.navy
            : $variant === "secondary"
            ? $theme.color.black
            : undefined,
        color: $variant == "primary" ? undefined : $theme.color.black,
      },
}));

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
