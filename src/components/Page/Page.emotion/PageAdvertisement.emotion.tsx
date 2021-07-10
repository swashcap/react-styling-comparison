import type { FC } from "react";

import type { PageAdvertisementProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";

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
    <div
      css={(theme: Theme) => ({
        display: "flex",
        flexWrap: "wrap",
        marginLeft: `calc(-1 * ${theme.space[2]})`,
        marginRight: `calc(-1 * ${theme.space[2]})`,
      })}
    >
      <div
        css={(theme: Theme) => ({
          paddingLeft: theme.space[2],
          paddingRight: theme.space[2],

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
      </div>
      <div
        css={(theme: Theme) => ({
          paddingLeft: theme.space[2],
          paddingRight: theme.space[2],

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
      </div>
    </div>
  </aside>
);
