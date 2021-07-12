import type { FC, HTMLAttributes } from "react";

import type { PageItemProps } from "../PageTypes";
import { PageItem } from "./PageItem";
import { PageRow, PageRowItem } from "./PageRow";
import { spaceMedium, spaceLarge } from "../../utilities/constants";
import { useBreakpoints } from "../../utilities/useBreakpoints";

export interface PageItemGridProps extends HTMLAttributes<HTMLDivElement> {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({
  items,
  style,
  ...rest
}) => {
  const { md, lg } = useBreakpoints();

  return (
    <PageRow
      style={{
        marginBottom: spaceMedium,
        ...style,
      }}
      {...rest}
    >
      {items.map((item, index) => (
        <PageRowItem
          style={{
            marginBottom: md || lg ? spaceLarge : spaceMedium,
            width: lg ? "25%" : md ? "33.33%" : "100%",
          }}
          key={index}
        >
          <PageItem {...item} />
        </PageRowItem>
      ))}
    </PageRow>
  );
};
