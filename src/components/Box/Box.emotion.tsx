import type { ReactElement } from "react";

import type { BoxProps } from "./BoxTypes";
import type { Theme } from "../utilities/theme";
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
  ...rest
}: BoxProps<T>): ReactElement<T> => {
  const Component = (as || "div") as T;

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Component
      css={({ borderRadius, breakpoint, color, space }: Theme) => ({
        background: color[bg],
        borderRadius: borderRadius[br],
        color: color[textColor],
        ...getMarginPaddingStyles(
          { ma, mb, mh, ml, mr, mt, mv, pa, pb, ph, pl, pr, pt, pv },
          space
        ),
        [breakpoint.md]: md && getMarginPaddingStyles(md, space),
        [breakpoint.lg]: lg && getMarginPaddingStyles(lg, space),
      })}
      {...rest}
    />
  );
};
