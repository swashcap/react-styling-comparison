import type { FC } from "react";

import type { PageItemProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";

export const PageItem: FC<PageItemProps> = ({
  description,
  fulfillment,
  imageAlt,
  imageSrc,
  price,
  title,
  ...rest
}) => (
  <article {...rest}>
    <a
      css={(theme: Theme) => ({
        display: "block",
        marginBottom: theme.space[2],
        transition: "opacity .15s ease-in",

        ":focus": {
          opacity: ".8",
        },
        ":hover": {
          opacity: ".8",
        },
      })}
      href="#"
    >
      <img
        alt={imageAlt}
        css={{ display: "block", width: "100%" }}
        loading="lazy"
        src={imageSrc}
      />
    </a>
    <div css={(theme: Theme) => ({ marginBottom: theme.space[1] })}>
      <h2
        css={(theme: Theme) => ({
          display: "inline",
          fontSize: theme.fontSize[5],
          lineHeight: theme.lineHeight.copy,
          margin: 0,
          paddingRight: theme.space[1],
        })}
      >
        {title}
      </h2>
      <p
        css={(theme: Theme) => ({
          color: theme.color.midGray,
          display: "inline",
          fontSize: theme.fontSize[6],
          margin: 0,
        })}
      >
        {description}
      </p>
    </div>
    <span
      css={(theme: Theme) => ({
        color: theme.color.orange,
        display: "block",
        fontSize: theme.fontSize[4],
        marginBottom: theme.space[2],
      })}
    >
      {price}
    </span>
    <div css={(theme) => ({ marginBottom: theme.space[2] })}>
      <Button size="medium">Lorem ipsum</Button>
    </div>
    {fulfillment && (
      <span
        css={(theme: Theme) => ({
          color: theme.color.midGray,
          fontSize: theme.fontSize[6],
        })}
      >
        Get it by{" "}
        <span css={(theme: Theme) => ({ color: theme.color.green })}>
          {fulfillment}
        </span>
      </span>
    )}
  </article>
);
