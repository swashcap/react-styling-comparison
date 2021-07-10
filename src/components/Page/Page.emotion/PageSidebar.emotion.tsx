import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { Sidebar } from "../../Sidebar/Sidebar.emotion";
import { Theme } from "../../utilities/theme";

export const PageSidebar: FC<
  HTMLAttributes<HTMLElement> & { sidebarProps: PageProps["sidebarProps"] }
> = ({ sidebarProps, ...rest }) => (
  <header
    css={(theme: Theme) => ({
      width: "100%",

      [theme.breakpoint.lg]: {
        width: "25%",
      },
    })}
    {...rest}
  >
    <Sidebar
      css={(theme: Theme) => ({
        [theme.breakpoint.lg]: {
          overflowY: "scroll",
          height: "100vh",
        },
      })}
      {...sidebarProps}
    />
  </header>
);
