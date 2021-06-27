import type { CSSProperties } from "react";
import { forwardRef } from "react";

import type { ButtonProps } from "./ButtonTypes";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { fluid, disabled, size = "small", style, variant = "secondary", ...rest },
    ref
  ) => {
    const buttonStyle: CSSProperties = {
      borderRadius: ".125rem",
      borderStyle: "solid",
      borderWidth: "1px",
      display: "inline-block",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
      lineHeight: 1,
      margin: 0,
      textAlign: "center",
    };

    if (!disabled) {
      buttonStyle.cursor = "pointer";
    }

    if (fluid) {
      buttonStyle.width = "100%";
    }

    if (size === "large") {
      buttonStyle.fontSize = "1.25rem";
      buttonStyle.padding = "1rem 2rem";
    } else if (size === "medium") {
      buttonStyle.fontSize = "1rem";
      buttonStyle.padding = ".5rem 1rem";
    } else {
      buttonStyle.fontSize = ".875rem";
      buttonStyle.padding = ".25rem .5rem";
    }

    if (variant === "primary") {
      buttonStyle.background = disabled ? "#001b44" : "#00449e";
      buttonStyle.borderColor = disabled ? "#001b44" : "#00449e";
      buttonStyle.color = "#fff";
      buttonStyle.fontWeight = 700;
    } else if (variant === "tertiary") {
      buttonStyle.background = "#fff";
      buttonStyle.borderColor = "#fff";
      buttonStyle.color = disabled ? "#999" : "#555";
      buttonStyle.fontWeight = 400;
    } else {
      buttonStyle.background = "#fff";
      buttonStyle.borderColor = disabled ? "#999" : "#555";
      buttonStyle.color = disabled ? "#999" : "#555";
      buttonStyle.fontWeight = 700;
    }

    return (
      <button
        disabled={disabled}
        style={{ ...buttonStyle, ...style }}
        ref={ref}
        type="button"
        {...rest}
      />
    );
  }
);
