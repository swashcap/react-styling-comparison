import type { PageAdvertisementProps } from "../PageTypes";
import type { Theme } from "../../utilities/theme";
import { Box } from "../../Box/Box.emotion";
import { BoxProps } from "../../Box/BoxTypes";
import { Button } from "../../Button/Button.emotion";
import { PageRow, PageRowItem } from "./PageRow.emotion";

export const PageAdvertisement = ({
  actionText,
  description,
  imageAlt,
  imageSrc,
  title,
  ...rest
}: PageAdvertisementProps & Omit<BoxProps<"aside">, "title">) => (
  <Box as="aside" bg="nearWhite" br={2} pa={3} {...rest}>
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
        <Box
          as="h1"
          css={(theme: Theme) => ({
            fontSize: theme.fontSize[4],
            lineHeight: theme.lineHeight.title,
          })}
          mb={2}
          mt={0}
        >
          {title}
        </Box>
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
