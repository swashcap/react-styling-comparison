import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageItemProps } from "../PageTypes";
import { PageItem } from "./PageItem";
import { PageRow, PageRowItem } from "./PageRow";
import { clsx } from "../../utilities/clsx";
import { useTheme } from "../../utilities/theme";

export interface PageItemGridProps extends HTMLAttributes<HTMLElement> {
  items: PageItemProps[];
}

export const PageItemGrid: FC<PageItemGridProps> = ({
  className,
  items,
  ...rest
}) => {
  const [css] = useStyletron();
  const { breakpoint, space } = useTheme();

  return (
    <PageRow
      className={clsx(
        css({
          marginBottom: space[3],
        }),
        className
      )}
      {...rest}
    >
      {items.map((item, index) => (
        <PageRowItem
          className={css({
            marginBottom: space[3],
            width: "100%",

            [breakpoint.md]: {
              marginBottom: space[4],
              width: "33.33%",
            },
            [breakpoint.lg]: {
              marginBottom: space[4],
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
};
