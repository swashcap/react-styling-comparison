import type { FC } from "react";

import type { PageProps } from "./PageTypes";
import { PageAdvertisement } from "./Page.emotion/PageAdvertisement.emotion";
import { PageFooter } from "./Page.emotion/PageFooter.emotion";
import { PageHeader } from "./Page.emotion/PageHeader.emotion";
import { PageItemGrid } from "./Page.emotion/PageItemGrid.emotion";
import { PageLead } from "./Page.emotion/PageLead.emotion";
import { PageSidebar } from "./Page.emotion/PageSidebar.emotion";
import { Theme } from "../utilities/theme";

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
    <div
      css={(theme: Theme) => ({
        display: "flex",
        flexWrap: "wrap",

        [theme.breakpoint.lg]: {
          height: "100vh",
          overflowY: "hidden",
        },
      })}
      {...rest}
    >
      <a
        css={{
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "fixed",
        }}
        href="#main"
      >
        Skip to main content
      </a>

      <PageSidebar sidebarProps={sidebarProps} />

      <main
        css={(theme: Theme) => ({
          fontFamily: theme.fontFamily.sansSerif,
          padding: theme.space[4],

          [theme.breakpoint.lg]: {
            height: "100vh",
            overflow: "scroll",
            width: "75%",
          },
        })}
        id="main"
      >
        <PageHeader header={header} />

        <PageLead lead={lead} />

        <PageItemGrid items={itemsStart} />

        {advertisements[0] && (
          <PageAdvertisement
            css={(theme: Theme) => ({
              marginBottom: theme.space[4],
            })}
            {...advertisements[0]}
          />
        )}

        <PageItemGrid items={itemsMiddle} />

        {advertisements[1] && (
          <PageAdvertisement
            css={(theme: Theme) => ({
              marginBottom: theme.space[4],
            })}
            {...advertisements[1]}
          />
        )}

        <PageItemGrid items={itemsEnd} />

        <PageFooter footer={footer} />
      </main>
    </div>
  );
};
