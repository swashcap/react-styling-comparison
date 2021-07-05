import type { FC } from "react";

import type { PageItemProps } from "../PageTypes";
import { PageItem } from "./PageItem";
import { PageRow, PageRowItem } from "./PageRow";
import { styled } from "../../utilities/theme";

const Item = styled(PageRowItem, ({ $theme }) => ({
  width: "100%",

  [$theme.breakpoint.md]: {
    marginBottom: $theme.space[4],
    width: "33.33%",
  },
  [$theme.breakpoint.lg]: {
    marginBottom: $theme.space[4],
    width: "25%",
  },
}));

export interface PageItemGridProps {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({ items }) => (
  <PageRow mb={3}>
    {items.map((item, index) => (
      <Item key={index} mb={3}>
        <PageItem {...item} />
      </Item>
    ))}
  </PageRow>
);
