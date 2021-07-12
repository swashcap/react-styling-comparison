import type { FC } from "react";

import type { PageAdvertisementProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { Button } from "../../Button/Button.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export const PageAdvertisement: FC<PageAdvertisementProps> = ({
  actionText,
  description,
  imageAlt,
  imageSrc,
  title,
  ...rest
}) => (
  <aside
    css={(theme: Theme) => ({
      background: theme.color.nearWhite,
      borderRadius: theme.borderRadius[2],
      padding: theme.space[3],
    })}
    {...rest}
  >
    <PageRow>
      <PageRowItem
        css={(theme: Theme) => ({
          [theme.breakpoint.md]: {
            width: "66.66%",
          },
          [theme.breakpoint.lg]: {
            width: "66.66%",
          },
        })}
      >
        <img
          alt={imageAlt}
          css={{
            display: "block",
            width: "100%",
          }}
          src={imageSrc}
        />
      </PageRowItem>
      <PageRowItem
        css={(theme: Theme) => ({
          [theme.breakpoint.md]: {
            width: "33.33%",
          },
          [theme.breakpoint.lg]: {
            width: "33.33%",
          },
        })}
      >
        <h1
          css={(theme: Theme) => ({
            fontSize: theme.fontSize[4],
            lineHeight: theme.lineHeight.title,
            marginBottom: theme.space[2],
            marginTop: 0,
          })}
        >
          {title}
        </h1>
        <p
          css={(theme: Theme) => ({
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
