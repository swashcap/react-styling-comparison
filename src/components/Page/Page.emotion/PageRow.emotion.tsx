import type { FC, HTMLAttributes } from "react";

import { Theme } from "../../utilities/theme";

export const PageRow: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    css={(theme: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginLeft: `calc(-1 * ${theme.space[2]})`,
      marginRight: `calc(-1 * ${theme.space[2]})`,
    })}
    {...props}
  />
);

export const PageRowItem: FC<HTMLAttributes<HTMLDivElement>> = (props) => (
  <div
    css={(theme: Theme) => ({
      paddingLeft: theme.space[2],
      paddingRight: theme.space[2],
    })}
    {...props}
  />
);
