import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";
import type { StyleObject } from "styletron-standard";

import { Theme, useTheme } from "./theme";
import { clsx } from "./clsx";

export type BoxSpace = 1 | 2 | 3 | 4;

const boxSpacingProps = {
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
} as const;

const getStyle = (
  props: BoxMarginPaddingProps,
  space: Theme["space"]
): StyleObject => {
  const output: StyleObject = {};

  for (const key in props) {
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(key) && key in boxSpacingProps) {
      output[boxSpacingProps[key]] = space[props[key]];
    }
  }

  return output;
};

export interface BoxMarginPaddingProps {
  mb?: BoxSpace;
  ml?: BoxSpace;
  mr?: BoxSpace;
  mt?: BoxSpace;
  pb?: BoxSpace;
  pl?: BoxSpace;
  pr?: BoxSpace;
  pt?: BoxSpace;
}

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    BoxMarginPaddingProps {
  as?: keyof JSX.IntrinsicElements;
  md?: BoxMarginPaddingProps;
  lg?: BoxMarginPaddingProps;
}

export const Box: FC<BoxProps> = ({
  as,
  className,
  mb,
  md,
  ml,
  mr,
  pb,
  pl,
  pr,
  pt,
  lg,
  ...rest
}) => {
  const Component = as ?? "div";
  const [css] = useStyletron();
  const { breakpoint, space } = useTheme();

  const style: StyleObject = getStyle({ mb, ml, mr, pb, pl, pr, pt }, space);

  if (md) {
    style[breakpoint.md] = getStyle(md, space);
  }

  if (lg) {
    style[breakpoint.lg] = getStyle(lg, space);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Component className={clsx(css(style), className)} {...rest} />
  );
};
