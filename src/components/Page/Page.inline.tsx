import type { FC } from "react";

import type { PageProps } from "./PageTypes";
import { PageAdvertisement } from "./Page.inline/PageAdvertisement";
import { PageFooter } from "./Page.inline/PageFooter";
import { PageHeader } from "./Page.inline/PageHeader";
import { PageItemGrid } from "./Page.inline/PageItemGrid";
import { PageLead } from "./Page.inline/PageLead";
import { PageSidebar } from "./Page.inline/PageSidebar";
import { fontSansSerif, spaceLarge } from "../utilities/constants";
import { useBreakpoints } from "../utilities/useBreakpoints";

export const Page: FC<PageProps> = ({
  advertisements,
  footer,
  header,
  items,
  lead,
  sidebarProps,
  style,
  ...rest
}) => {
  const { lg } = useBreakpoints();
  const itemsStart = items.slice(0, 12);
  const itemsMiddle = items.slice(12, 24);
  const itemsEnd = items.slice(24);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: lg ? "100vh" : "auto",
        overflowY: lg ? "hidden" : "auto",
        ...style,
      }}
      {...rest}
    >
      <a
        href="#main"
        style={{
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "fixed",
        }}
      >
        Skip to main content
      </a>

      <PageSidebar sidebarProps={sidebarProps} />

      <main
        style={{
          fontFamily: fontSansSerif,
          height: lg ? "100vh" : "auto",
          overflowY: lg ? "scroll" : "auto",
          padding: spaceLarge,
          width: lg ? "75%" : "100%",
        }}
        id="main"
      >
        <PageHeader header={header} />

        <PageLead lead={lead} />

        <PageItemGrid items={itemsStart} />

        {advertisements[0] && (
          <PageAdvertisement
            style={{
              marginBottom: spaceLarge,
            }}
            {...advertisements[0]}
          />
        )}

        <PageItemGrid items={itemsMiddle} />

        {advertisements[1] && (
          <PageAdvertisement
            style={{
              marginBottom: spaceLarge,
            }}
            {...advertisements[1]}
          />
        )}

        <PageItemGrid items={itemsEnd} />

        <PageFooter footer={footer} />
      </main>
    </div>
  );
};
