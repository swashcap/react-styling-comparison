import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { BoxProps } from "../../Box/BoxTypes";
import type { PageAdvertisementProps } from "../PageTypes";
import { Box } from "../../Box/Box.styletron";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { useTheme } from "../../utilities/theme";

export const PageAdvertisement: FC<
  PageAdvertisementProps & Omit<BoxProps<"aside">, "title">
> = ({ actionText, description, imageAlt, imageSrc, title, ...rest }) => {
  const [css] = useStyletron();
  const theme = useTheme();
  const { breakpoint } = theme;

  return (
    <Box as="aside" bg="nearWhite" br={2} pa={3} {...rest}>
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
