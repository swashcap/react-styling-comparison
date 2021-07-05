import type { FC } from "react";

import { Box } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { styled } from "../../utilities/theme";
import type { PageItemProps } from "../PageTypes";

const PageItemLink = styled("a", ({ $theme }) => ({
  display: "block",
  marginBottom: $theme.space[2],
  transition: "opacity .15s ease-in",

  ":focus": {
    opacity: ".8",
  },
  ":hover": {
    opacity: ".8",
  },
}));

const PageItemImage = styled("img", {
  display: "block",
  width: "100%",
});

const PageItemTitle = styled("h2", ({ $theme }) => ({
  display: "inline",
  fontSize: $theme.fontSize[5],
  lineHeight: $theme.lineHeight.copy,
  margin: 0,
  paddingRight: $theme.space[1],
}));

const PageItemDescription = styled("p", ({ $theme }) => ({
  color: $theme.color.midGray,
  display: "inline",
  fontSize: $theme.fontSize[6],
  margin: 0,
}));

const PageItemPrice = styled("span", ({ $theme }) => ({
  color: $theme.color.orange,
  display: "block",
  fontSize: $theme.fontSize[4],
  marginBottom: $theme.space[2],
}));

const PageItemFulfillment = styled("span", ({ $theme }) => ({
  color: $theme.color.midGray,
  fontSize: $theme.fontSize[6],
}));

const PageItemFulfillmentText = styled("span", ({ $theme }) => ({
  color: $theme.color.green,
}));

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
    <PageItemLink href="#">
      <PageItemImage alt={imageAlt} src={imageSrc} />
    </PageItemLink>
    <Box mb={1}>
      <PageItemTitle>{title}</PageItemTitle>
      <PageItemDescription>{description}</PageItemDescription>
    </Box>
    <PageItemPrice>{price}</PageItemPrice>
    <Box mb={2}>
      <Button size="medium">Lorem ipsum</Button>
    </Box>
    {fulfillment && (
      <PageItemFulfillment>
        Get it by{" "}
        <PageItemFulfillmentText>{fulfillment}</PageItemFulfillmentText>
      </PageItemFulfillment>
    )}
  </article>
);
