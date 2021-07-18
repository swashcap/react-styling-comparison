import type { ReactElement } from "react";

import type { BoxProps } from "./BoxTypes";
import { useFilteredPropsAndStyle } from "./Box.service";

export const Box = <T extends keyof JSX.IntrinsicElements = "div">({
  as,
  ...rest
}: BoxProps<T>): ReactElement<T> => {
  const Component = as || "div";

  const { props, styles } = useFilteredPropsAndStyle(rest);

  /* eslint-disable @typescript-eslint/ban-ts-comment */
  return (
    // @ts-ignore
    <Component
      // @ts-ignore
      css={styles}
      // @ts-ignore
      {...props}
    />
  );
};
