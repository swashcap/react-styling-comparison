import type { FC } from "react";

import type { PageAdvertisementProps } from "../PageTypes";
import { Box, BoxProps } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { styled } from "../../utilities/theme";

const BasePageAdvertisement = styled(Box, ({ $theme }) => ({
  background: $theme.color.nearWhite,
  borderRadius: $theme.borderRadius[2],
}));

const PageAdvertisementImageWrapper = styled(PageRowItem, ({ $theme }) => ({
  [$theme.breakpoint.md]: {
    width: "66.66%",
  },
  [$theme.breakpoint.lg]: {
    width: "66.66%",
  },
}));

const PageAdvertisementTextWrapper = styled(PageRowItem, ({ $theme }) => ({
  [$theme.breakpoint.md]: {
    width: "33.33%",
  },
  [$theme.breakpoint.lg]: {
    width: "33.33%",
  },
}));

const PageAdvertisementImage = styled("img", {
  display: "block",
  width: "100%",
});

const PageAdvertisementTitle = styled("h1", ({ $theme }) => ({
  fontSize: $theme.fontSize[4],
  lineHeight: $theme.lineHeight.title,
  marginBottom: $theme.space[2],
  marginTop: 0,
}));

export const PageAdvertisement: FC<
  PageAdvertisementProps & Omit<BoxProps, "title">
> = ({ actionText, description, imageAlt, imageSrc, title, ...rest }) => (
  <BasePageAdvertisement as="aside" pa={3} {...rest}>
    <PageRow>
      <PageAdvertisementImageWrapper>
        <PageAdvertisementImage alt={imageAlt} src={imageSrc} />
      </PageAdvertisementImageWrapper>
      <PageAdvertisementTextWrapper>
        <PageAdvertisementTitle>{title}</PageAdvertisementTitle>
        <Box as="p" mb={3} mt={2}>
          {description}
        </Box>
        <Button size="medium" variant="primary">
          {actionText}
        </Button>
      </PageAdvertisementTextWrapper>
    </PageRow>
  </BasePageAdvertisement>
);
