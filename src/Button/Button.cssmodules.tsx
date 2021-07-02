import { forwardRef } from "react";

import style from "./Button.module.scss";
import type { ButtonProps } from "./ButtonTypes";
import { clsx } from "../utilities/clsx";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, fluid, size = "small", variant = "secondary", ...rest },
    ref
  ) => (
    <button
      className={clsx(
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
