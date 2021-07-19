import type { FC, HTMLAttributes } from "react";

import type { PageItemProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { PageItem } from "./PageItem.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export interface PageItemGridProps extends HTMLAttributes<HTMLElement> {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({ items, ...rest }) => (
  <PageRow mb={3} {...rest}>
    {items.map((item, index) => (
      <PageRowItem
        css={(theme: Theme) => ({
          width: "100%",

          [theme.breakpoint.md]: {
            width: "33.33%",
          },
          [theme.breakpoint.lg]: {
            width: "25%",
          },
        })}
        key={index}
        lg={{ mb: 4 }}
        mb={3}
        md={{ mb: 4 }}
      >
        <PageItem {...item} />
      </PageRowItem>
    ))}
  </PageRow>
);
