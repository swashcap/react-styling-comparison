import type { FC, HTMLAttributes } from "react";

import type { PageProps } from "../PageTypes";
import { styled } from "../../utilities/theme";
import { Sidebar as BaseSidebar } from "../../Sidebar/Sidebar.styletron";

const BasePageSidebar = styled("header", ({ $theme }) => ({
  [$theme.breakpoint.lg]: {
    width: "25%",
  },
}));

const Sidebar = styled(BaseSidebar, ({ $theme }) => ({
  [$theme.breakpoint.lg]: {
    overflowY: "scroll",
    height: "100vh",
  },
}));

export const PageSidebar: FC<
  HTMLAttributes<HTMLElement> & { sidebarProps: PageProps["sidebarProps"] }
> = ({ sidebarProps, ...rest }) => (
  <BasePageSidebar {...rest}>
    <Sidebar {...sidebarProps} />
  </BasePageSidebar>
);
