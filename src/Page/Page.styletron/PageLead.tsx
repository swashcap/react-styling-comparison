import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Box, BoxProps } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { styled } from "../../utilities/theme";

const BasePageLead = styled(Box, ({ $theme }) => ({
  background: $theme.color.lightestBlue,
  borderRadius: $theme.borderRadius[2],
  color: $theme.color.darkGray,
}));

const PageLeadTitle = styled("h1", ({ $theme }) => ({
  fontSize: $theme.fontSize[1],
  fontWeight: $theme.fontWeight[800],
  lineHeight: $theme.lineHeight.title,
  marginBottom: $theme.space[2],
  marginTop: 0,
}));

const PageLeadDescription = styled("p", ({ $theme }) => ({
  fontSize: $theme.fontSize[3],
  lineHeight: $theme.lineHeight.copy,
  marginBottom: $theme.space[3],
  marginTop: 0,
}));

export const PageLead: FC<
  HTMLAttributes<HTMLElement> & { lead: PageProps["lead"] } & Omit<
      BoxProps,
      "title"
    >
> = ({ lead: { actionOnClick, actionText, description, title }, ...rest }) => (
  <BasePageLead mb={4} pa={4} {...rest}>
    <PageLeadTitle>{title}</PageLeadTitle>
    <PageLeadDescription>{description}</PageLeadDescription>
    <Button onClick={actionOnClick} size="large" variant="primary">
      {actionText}
    </Button>
  </BasePageLead>
);
