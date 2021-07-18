import type { ReactElement } from "react";
import { useStyletron } from "styletron-react";

import type { BoxProps } from "./BoxTypes";
import { clsx } from "../utilities/clsx";
import { useFilteredPropsAndStyle } from "./Box.service";

export const Box = <T extends keyof JSX.IntrinsicElements = "div">({
  as,
  className,
  ...rest
}: BoxProps<T>): ReactElement<T> => {
  const Component = as || "div";
  const { props, styles } = useFilteredPropsAndStyle(rest);
  const [css] = useStyletron();

  /* eslint-disable @typescript-eslint/ban-ts-comment */
  return (
    // @ts-ignore
    <Component
      // @ts-ignore
      className={clsx(css(styles), className)}
      // @ts-ignore
      {...props}
    />
  );
};
