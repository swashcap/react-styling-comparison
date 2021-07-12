import type { FC, HTMLAttributes } from "react";

import type { PageItemProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { PageItem } from "./PageItem.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export interface PageItemGridProps extends HTMLAttributes<HTMLElement> {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({ items, ...rest }) => (
  <PageRow
    css={(theme: Theme) => ({
      marginBottom: theme.space[3],
    })}
    {...rest}
  >
    {items.map((item, index) => (
      <PageRowItem
        css={(theme: Theme) => ({
          marginBottom: theme.space[3],
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
      </PageRowItem>
    ))}
  </PageRow>
);
