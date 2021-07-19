import type { FC } from "react";
import { useStyletron } from "styletron-react";

import type { PageProps } from "./PageTypes";
import { Box } from "../Box/Box.styletron";
import { PageAdvertisement } from "./Page.styletron/PageAdvertisement";
import { PageFooter } from "./Page.styletron/PageFooter";
import { PageHeader } from "./Page.styletron/PageHeader";
import { PageItemGrid } from "./Page.styletron/PageItemGrid";
import { PageLead } from "./Page.styletron/PageLead";
import { PageSidebar } from "./Page.styletron/PageSidebar";
import { clsx } from "../utilities/clsx";
import { useTheme } from "../utilities/theme";

export const Page: FC<PageProps> = ({
  advertisements,
  className,
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

  const [css] = useStyletron();
  const theme = useTheme();

  return (
    <div
      className={clsx(
        css({
          display: "flex",
          flexWrap: "wrap",

          [theme.breakpoint.lg]: {
            height: "100vh",
            overflowY: "hidden",
          },
        }),
        className
      )}
      {...rest}
    >
      <a
        className={css({
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "fixed",
        })}
        href="#main"
      >
        Skip to main content
      </a>

      <PageSidebar sidebarProps={sidebarProps} />

      <Box
        as="main"
        className={css({
          fontFamily: theme.fontFamily.sansSerif,

          [theme.breakpoint.lg]: {
            height: "100vh",
            overflow: "scroll",
            width: "75%",
          },
        })}
        id="main"
        pa={4}
      >
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
      </Box>
    </div>
  );
};
