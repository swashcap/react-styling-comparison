import type { ReactElement } from "react";
import { useStyletron } from "styletron-react";

import type { BoxProps } from "./BoxTypes";
import { clsx } from "../utilities/clsx";
import { useTheme } from "../utilities/theme";
import { getMarginPaddingStyles } from "./Box.service";

export const Box = <T extends keyof JSX.IntrinsicElements = "div">({
  as,
  bg,
  br,
  lg,
  ma,
  mb,
  md,
  mh,
  ml,
  mr,
  mt,
  mv,
  pa,
  pb,
  ph,
  pl,
  pr,
  pt,
  pv,
  textColor,
  className,
  ...rest
}: BoxProps<T>): ReactElement<T> => {
  const Component = (as || "div") as T;
  const [css] = useStyletron();
  const { borderRadius, breakpoint, color, space } = useTheme();

  return (
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    <Component
      className={clsx(
        css({
          background: color[bg],
          borderRadius: borderRadius[br],
          color: color[textColor],
          ...getMarginPaddingStyles(
            {
              ma,
              mb,
              mh,
              ml,
              mr,
              mt,
              mv,
              pa,
              pb,
              ph,
              pl,
              pr,
              pt,
              pv,
            },
            space
          ),
          [breakpoint.md]: md && getMarginPaddingStyles(md, space),
          [breakpoint.lg]: lg && getMarginPaddingStyles(lg, space),
        }),
        className
      )}
      {...rest}
    />
  );
};
