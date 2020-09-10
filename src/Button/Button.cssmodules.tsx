import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./ButtonTypes";
import style from "./Button.module.scss";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, fluid, size = "small", variant = "secondary", ...rest },
    ref
  ) => (
    <button
      className={classNames(
        style.button,
        fluid && style.fluid,
        size === "large" && style.large,
        size === "medium" && style.medium,
        size === "small" && style.small,
        variant === "primary" && style.primary,
        variant === "secondary" && style.secondary,
        variant === "tertiary" && style.tertiary,
        className
      )}
      ref={ref}
      type="button"
      {...rest}
    />
  )
);
