import type { FC, FormHTMLAttributes, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Box, BoxProps } from "../../utilities/Box";
import { PageRow, PageRowItem } from "./PageRow";
import { styled } from "../../utilities/theme";

const PageHeaderStatsWrapper = styled(PageRowItem, ({ $theme }) => ({
  width: "100%",

  [$theme.breakpoint.md]: {
    width: "66.66%",
  },
  [$theme.breakpoint.lg]: {
    width: "66.66%",
  },
}));

const PageHeaderStats = styled(Box, ({ $theme }) => ({
  borderBottom: `1px solid ${$theme.color.silver}`,
  display: "flex",
}));

const PageHeaderStatsItem = styled("div", {
  display: "inline-block",
  position: "relative",
});

const PageHeaderStatsItemValue = styled<
  "span",
  HTMLAttributes<HTMLElement> & { $status: "info" | "success" }
>("span", ({ $status, $theme }) => ({
  color:
    ($status === "success" && $theme.color.green) ||
    ($status === "info" && $theme.color.blue) ||
    undefined,
  fontSize: $theme.fontSize[5],
  fontWeight: $theme.fontWeight[700],
  lineHeight: $theme.lineHeight.title,
}));

const PageHeaderStatsItemCount = styled("span", ({ $theme }) => ({
  background: $theme.color.yellow,
  borderRadius: "100%",
  display: "inline-block",
  fontSize: $theme.fontSize[7],
  lineHeight: $theme.lineHeight.solid,
  padding: $theme.space[1],
  position: "absolute",
  right: "-1rem",
  top: "-1rem",
}));

const PageHeaderStatsItemLabel = styled("span", ({ $theme }) => ({
  color: $theme.color.gray,
  display: "block",
  fontSize: $theme.fontSize[7],
  lineHeight: $theme.lineHeight.solid,
}));

const PageHeaderSearchForm = styled<
  "form",
  FormHTMLAttributes<HTMLFormElement> & BoxProps
>(PageRowItem as any, ({ $theme }) => ({
  display: "flex",
  width: "100%",

  [$theme.breakpoint.md]: {
    width: "33.33%",
  },
  [$theme.breakpoint.lg]: {
    width: "33.33%",
  },
}));

const PageHeaderSearchInput = styled("input", ({ $theme }) => ({
  background: $theme.color.nearWhite,
  border: `1px solid ${$theme.color.silver}`,
  borderRadius: `${$theme.borderRadius[2]} 0 0 ${$theme.borderRadius[2]}`,
  color: $theme.color.black,
  flex: "1 1 auto",
  fontFamily: $theme.fontFamily.sansSerif,
  fontSize: $theme.fontSize[5],
  lineHeight: $theme.lineHeight.solid,
  padding: $theme.space[2],
}));

const PageHeaderSearchButton = styled("button", ({ $theme }) => ({
  background: $theme.color.gray,
  border: "1px solid transparent",
  borderRadius: `0 ${$theme.borderRadius[2]} ${$theme.borderRadius[2]} 0`,
  color: $theme.color.white,
  cursor: "pointer",
  flex: "none",
  fontFamily: $theme.fontFamily.sansSerif,
  fontSize: $theme.fontSize[5],
  lineHeight: $theme.lineHeight.solid,
  padding: $theme.space[2],
}));

export const PageHeader: FC<
  HTMLAttributes<HTMLElement> & { header: PageProps["header"] }
> = ({ header, ...rest }) => (
  <PageRow mb={4} {...rest}>
    <PageHeaderStatsWrapper md={{ mb: 3 }} lg={{ mb: 3 }}>
      <PageHeaderStats pb={1}>
        {header.map(({ count, label, status, value }, index) => (
          <Box pr={index < header.length - 1 ? 4 : undefined} key={index}>
            <PageHeaderStatsItem>
              <PageHeaderStatsItemValue $status={status}>
                {value}
              </PageHeaderStatsItemValue>
              {typeof count !== "undefined" && (
                <PageHeaderStatsItemCount>{count}</PageHeaderStatsItemCount>
              )}
            </PageHeaderStatsItem>
            <PageHeaderStatsItemLabel>{label}</PageHeaderStatsItemLabel>
          </Box>
        ))}
      </PageHeaderStats>
    </PageHeaderStatsWrapper>
    <PageHeaderSearchForm as="form" action="/search" role="search">
      <PageHeaderSearchInput
        aria-label="Search"
        name="q"
        placeholder="Lorem ipsum…"
      />
      <PageHeaderSearchButton type="submit">Search</PageHeaderSearchButton>
    </PageHeaderSearchForm>
  </PageRow>
);
