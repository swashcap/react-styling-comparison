import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { PageItemProps } from "../PageTypes";
import { PageItem } from "./PageItem";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";

export interface PageItemGridProps {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({ items }) => {
  const [css] = useStyletron();
  const { breakpoint } = useTheme();

  return (
    <PageRow mb={3}>
      {items.map((item, index) => (
        <PageRowItem
          className={css({
            width: "100%",

            [breakpoint.md]: {
              width: "33.33%",
            },
            [breakpoint.lg]: {
              width: "25%",
            },
          })}
          key={index}
          mb={3}
          md={{ mb: 4 }}
          lg={{ mb: 4 }}
        >
          <PageItem {...item} />
        </PageRowItem>
      ))}
    </PageRow>
  );
};
