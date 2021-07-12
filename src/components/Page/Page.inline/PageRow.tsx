import type { FC, HTMLAttributes } from "react";

import { spaceSmall } from "../../utilities/constants";

export const PageRow: FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  ...rest
}) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      marginLeft: `calc(-1 * ${spaceSmall})`,
      marginRight: `calc(-1 * ${spaceSmall})`,
      ...style,
    }}
    {...rest}
  />
);

export const PageRowItem: FC<HTMLAttributes<HTMLDivElement>> = ({
  style,
  ...rest
}) => (
  <div
    style={{
      paddingLeft: spaceSmall,
      paddingRight: spaceSmall,
      ...style,
    }}
    {...rest}
  />
);
