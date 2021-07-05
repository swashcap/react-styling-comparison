import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Box } from "../../utilities/Box";
import { Button } from "../../Button/Button.styletron";
import { PageRow, PageRowItem } from "./PageRow";
import { styled } from "../../utilities/theme";

const BasePageFooter = styled(Box, ({ $theme }) => ({
  borderTop: `1px solid ${$theme.color.silver}`,
  color: $theme.color.midGray,
}));

const PageFooterMenuWrapper = styled(PageRowItem, ({ $theme }) => ({
  width: "100%",

  [$theme.breakpoint.md]: {
    width: "33.33%",
  },
  [$theme.breakpoint.lg]: {
    width: "33.33%",
  },
}));

const PageFooterMenuTitle = styled("h3", ({ $theme }) => ({
  fontSize: $theme.fontSize[5],
  fontWieght: $theme.fontWeight[700],
  lineHeight: $theme.lineHeight.copy,
  marginBottom: $theme.space[1],
  marginTop: 0,
}));

const PageFooterMenu = styled("ul", ({ $theme }) => ({
  fontSize: $theme.fontSize[6],
  lineHeight: $theme.lineHeight.copy,
  listStyle: "none",
  margin: 0,
  padding: 0,
}));

const PageFooterMenuLink = styled("a", ({ $theme }) => ({
  color: "inherit",
  textDecoration: "underline",

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const PageFooterFinePrint1 = styled("p", ({ $theme }) => ({
  fontSize: $theme.fontSize[6],
  lineHeight: $theme.lineHeight.copy,
  marginBottom: $theme.space[2],
  marginTop: 0,
}));

const PageFooterFinePrint2 = styled("small", ({ $theme }) => ({
  borderTop: `1px solid ${$theme.color.moonGray}`,
  color: $theme.color.gray,
  display: "block",
  fontSize: $theme.fontSize[7],
  lineHeight: $theme.lineHeight.copy,
  marginTop: $theme.space[3],
  paddingTop: $theme.space[2],
}));

export const PageFooter: FC<
  HTMLAttributes<HTMLElement> & { footer: PageProps["footer"] }
> = ({
  footer: { actionOnClick, actionText, finePrint1, finePrint2, menus },
  ...rest
}) => (
  <BasePageFooter mt={4} pb={4} pt={3} {...rest}>
    <PageRow mb={4}>
      {menus.map(({ title, links }, index) => (
        <PageFooterMenuWrapper key={index}>
          <PageFooterMenuTitle>{title}</PageFooterMenuTitle>
          <PageFooterMenu>
            {links.map(({ name, url }) => (
              <li key={url}>
                <PageFooterMenuLink href={url}>{name}</PageFooterMenuLink>
              </li>
            ))}
          </PageFooterMenu>
        </PageFooterMenuWrapper>
      ))}
    </PageRow>
    <aside>
      <PageFooterFinePrint1>{finePrint1}</PageFooterFinePrint1>
      <Button onClick={actionOnClick} size="small" variant="tertiary">
        {actionText}
      </Button>
      <PageFooterFinePrint2>{finePrint2}</PageFooterFinePrint2>
    </aside>
  </BasePageFooter>
);
