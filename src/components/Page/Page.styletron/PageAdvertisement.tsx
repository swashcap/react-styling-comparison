import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { PageAdvertisementProps } from "../PageTypes";
import { Box, BoxProps } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";
import { clsx } from "../../utilities/clsx";

export const PageAdvertisement: FC<
  PageAdvertisementProps & Omit<BoxProps, "title">
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
    <Box
      as="aside"
      className={clsx(
        css({
          background: theme.color.nearWhite,
          borderRadius: theme.borderRadius[2],
        }),
        className
      )}
      pb={3}
      pl={3}
      pr={3}
      pt={3}
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
          <Box as="p" mb={3} mt={2}>
            {description}
          </Box>
          <Button size="medium" variant="primary">
            {actionText}
          </Button>
        </PageRowItem>
      </PageRow>
    </Box>
  );
};
