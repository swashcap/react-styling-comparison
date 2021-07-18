import type { FC } from "react";

import type { PageItemProps } from "../PageTypes";
import { Button } from "../../Button/Button.emotion";
import { Theme } from "../../utilities/theme";
import { Box } from "../../Box/Box.emotion";

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
    <Box mb={1}>
      <Box
        as="h2"
        css={(theme: Theme) => ({
          display: "inline",
          fontSize: theme.fontSize[5],
          lineHeight: theme.lineHeight.copy,
        })}
        ma={0}
        pr={1}
      >
        {title}
      </Box>
      <Box
        as="p"
        css={(theme: Theme) => ({
          display: "inline",
          fontSize: theme.fontSize[6],
        })}
        ma={0}
        textColor="midGray"
      >
        {description}
      </Box>
    </Box>
    <Box
      as="span"
      css={(theme: Theme) => ({
        display: "block",
        fontSize: theme.fontSize[4],
      })}
      mb={2}
      textColor="orange"
    >
      {price}
    </Box>
    <Box mb={2}>
      <Button size="medium">Lorem ipsum</Button>
    </Box>
    {fulfillment && (
      <Box
        as="span"
        css={(theme: Theme) => ({
          fontSize: theme.fontSize[6],
        })}
        textColor="midGray"
      >
        Get it by{" "}
        <Box as="span" textColor="green">
          {fulfillment}
        </Box>
      </Box>
    )}
  </article>
);
