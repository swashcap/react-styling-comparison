import { forwardRef } from "react";

import type { ButtonProps } from "./ButtonTypes";
import type { Theme } from "../utilities/theme";

const getSizeStyles = (
  size: ButtonProps["size"],
  { fontSize, space }: Theme
) => {
  if (size === "large") {
    return {
      fontSize: fontSize[4],
      padding: `${space[3]} ${space[4]}`,
    };
  } else if (size === "medium") {
    return {
      fontSize: fontSize[5],
      padding: `${space[2]} ${space[3]}`,
    };
  }

  return {
    fontSize: fontSize[6],
    padding: `${space[1]} ${space[2]}`,
  };
};

const getVariantStyles = (
  { disabled, variant }: Pick<ButtonProps, "disabled" | "variant">,
  { color, fontWeight }: Theme
) => {
  if (variant === "primary") {
    return {
      background: disabled ? color.silver : color.darkBlue,
      borderColor: disabled ? color.silver : color.darkBlue,
      color: color.white,
      fontWeight: fontWeight[700],

      "&:focus, &:hover": disabled
        ? undefined
        : {
            background: color.navy,
            borderColor: color.navy,
          },
    };
  } else if (variant === "secondary") {
    return {
      background: color.white,
      borderColor: disabled ? color.silver : color.midGray,
      color: disabled ? color.silver : color.midGray,
      fontWeight: fontWeight[700],

      "&:focus, &:hover": disabled
        ? undefined
        : {
            borderColor: color.black,
            color: color.black,
          },
    };
  }

  return {
    background: color.white,
    borderColor: color.white,
    color: disabled ? color.silver : color.midGray,
    fontWeight: fontWeight[400],

    "&:hover, &:hover": disabled
      ? undefined
      : {
          color: color.black,
        },
  };
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { disabled, fluid, size = "small", variant = "secondary", ...rest },
    ref
  ) => (
    <button
      css={(theme: Theme) => ({
        borderRadius: theme.borderRadius[1],
        borderStyle: "solid",
        borderWidth: "1px",
        cursor: disabled ? "default" : "pointer",
        display: "inline-block",
        fontFamily: theme.fontFamily.sansSerif,
        lineHeight: theme.lineHeight.solid,
        margin: 0,
        textAlign: "center",
        width: fluid ? "100%" : undefined,
        ...getSizeStyles(size, theme),
        ...getVariantStyles({ disabled, variant }, theme),
      })}
      disabled={disabled}
      ref={ref}
      type="button"
      {...rest}
    />
  )
);
