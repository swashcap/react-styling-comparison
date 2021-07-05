import { forwardRef } from "react";

import type { ButtonProps } from "./ButtonTypes";
import { clsx } from "../utilities/clsx";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled,
      fluid,
      size = "small",
      variant = "secondary",
      ...rest
    },
    ref
  ) => (
    <button
      className={clsx(
        "ba br2 dib lh-solid ma0 sans-serif tc",
        !disabled && "pointer",
        fluid && "w-100",
        size === "large" && "f4 ph4 pv3",
        size === "medium" && "f5 ph3 pv2",
        size === "small" && "f6 ph2 pv1",
        (variant === "primary" || variant === "secondary") && "b",
        variant === "primary" && "white",
        variant === "primary" &&
          (disabled
            ? "b--silver bg--silver"
            : "b--dark-blue bg-dark-blue hover-bg-navy"),
        variant === "secondary" && "bg-white",
        variant === "secondary" &&
          (disabled ? "b--silver silver" : "b--mid-gray mid-gray hover-black"),
        variant === "tertiary" && "b--white bg-white normal",
        variant === "tertiary" &&
          (disabled ? "silver" : "mid-gray hover-black"),
        className
      )}
      disabled={disabled}
      ref={ref}
      type="button"
      {...rest}
    />
  )
);
