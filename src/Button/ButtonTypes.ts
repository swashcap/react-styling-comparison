import React from "react";

export type ButtonSize = "large" | "medium" | "small";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fluid?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
