import type { FC } from "react";

import type { PageProps } from "./PageTypes";
import { PageAdvertisement } from "./Page.styletron/PageAdvertisement";
import { PageFooter } from "./Page.styletron/PageFooter";
import { PageHeader } from "./Page.styletron/PageHeader";
import { PageItemGrid } from "./Page.styletron/PageItemGrid";
import { PageLead } from "./Page.styletron/PageLead";
import { PageSidebar } from "./Page.styletron/PageSidebar";
import { styled } from "../utilities/theme";

const BasePage = styled("div", ({ $theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  [`@media ${$theme.breakpoint.lg}`]: {
    height: "100vh",
    overflowY: "hidden",
  },
}));

const PageSkipLink = styled("a", {
  clip: "rect(1px, 1px, 1px, 1px)",
  position: "fixed",
});

const PageMain = styled("main", ({ $theme }) => ({
  fontFamily: $theme.fontFamily.sansSerif,
  padding: $theme.space[4],

  [`@media ${$theme.breakpoint.lg}`]: {
    height: "100vh",
    overflow: "scroll",
    width: "75%",
  },
}));

export const Page: FC<PageProps> = ({
  advertisements,
  footer,
  header,
  items,
  lead,
  sidebarProps,
  ...rest
}) => {
  const itemsStart = items.slice(0, 12);
  const itemsMiddle = items.slice(12, 24);
  const itemsEnd = items.slice(24);

  return (
    <BasePage {...rest}>
      <PageSkipLink href="#main">Skip to main content</PageSkipLink>

      <PageSidebar sidebarProps={sidebarProps} />

      <PageMain id="main">
        <PageHeader header={header} />

        <PageLead lead={lead} />

        <PageItemGrid items={itemsStart} />

        {advertisements[0] && (
          <PageAdvertisement mb={4} {...advertisements[0]} />
        )}

        <PageItemGrid items={itemsMiddle} />

        {advertisements[1] && (
          <PageAdvertisement mb={4} {...advertisements[1]} />
        )}

        <PageItemGrid items={itemsEnd} />

        <PageFooter footer={footer} />
      </PageMain>
    </BasePage>
  );
};
