import type { FC } from "react";

import type { PageItemProps } from "../PageTypes";
import { PageItem } from "./PageItem.emotion";
import { Theme } from "../../utilities/theme";

export interface PageItemGridProps {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({ items }) => (
  <div
    css={(theme: Theme) => ({
      display: "flex",
      flexWrap: "wrap",
      marginBottom: theme.space[3],
      marginLeft: `calc(-1 * ${theme.space[2]})`,
      marginRight: `calc(-1 * ${theme.space[2]})`,
    })}
  >
    {items.map((item, index) => (
      <div
        css={(theme: Theme) => ({
          marginBottom: theme.space[3],
          paddingLeft: theme.space[2],
          paddingRight: theme.space[2],
          width: "100%",

          [theme.breakpoint.md]: {
            marginBottom: theme.space[4],
            width: "33.33%",
          },
          [theme.breakpoint.lg]: {
            marginBottom: theme.space[4],
            width: "25%",
          },
        })}
        key={index}
      >
        <PageItem {...item} />
      </div>
    ))}
  </div>
);
