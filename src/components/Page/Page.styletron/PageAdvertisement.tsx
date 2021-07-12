import type { FC, HTMLAttributes } from "react";
import { useStyletron } from "styletron-react";

import type { PageAdvertisementProps } from "../PageTypes";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";
import { clsx } from "../../utilities/clsx";

export const PageAdvertisement: FC<
  PageAdvertisementProps & Omit<HTMLAttributes<HTMLElement>, "title">
> = ({
  actionText,
  className,
  description,
  imageAlt,
  imageSrc,
  title,
  ...rest
}) => {
  const [css] = useStyletron();
  const theme = useTheme();
  const { breakpoint } = theme;

  return (
    <aside
      className={clsx(
        css({
          background: theme.color.nearWhite,
          borderRadius: theme.borderRadius[2],
          padding: theme.space[3],
        }),
        className
      )}
      {...rest}
    >
      <PageRow>
        <PageRowItem
          className={css({
            [breakpoint.md]: {
              width: "66.66%",
            },
            [breakpoint.lg]: {
              width: "66.66%",
            },
          })}
        >
          <img
            alt={imageAlt}
            className={css({
              display: "block",
              width: "100%",
            })}
            src={imageSrc}
          />
        </PageRowItem>
        <PageRowItem
          className={css({
            [breakpoint.md]: {
              width: "33.33%",
            },
            [breakpoint.lg]: {
              width: "33.33%",
            },
          })}
        >
          <h1
            className={css({
              fontSize: theme.fontSize[4],
              lineHeight: theme.lineHeight.title,
              marginBottom: theme.space[2],
              marginTop: 0,
            })}
          >
            {title}
          </h1>
          <p
            className={css({
              marginBottom: theme.space[3],
              marginTop: theme.space[2],
            })}
          >
            {description}
          </p>
          <Button size="medium" variant="primary">
            {actionText}
          </Button>
        </PageRowItem>
      </PageRow>
    </aside>
  );
};
