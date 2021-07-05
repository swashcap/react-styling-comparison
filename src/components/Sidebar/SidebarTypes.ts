import type { CSSProperties, MouseEvent, MouseEventHandler } from "react";

export interface SidebarNavItem {
  active?: boolean;
  icon: string;
  name: string;
  url: string;
}

export interface SidebarSubNavItem {
  name: string;
  url: string;
}

export interface SidebarProps {
  account: {
    name: string;
    onSettingsClick?: MouseEventHandler<HTMLButtonElement>;
    profileURL: string;
  };
  className?: string;
  navItems: SidebarNavItem[];
  onNavItemClick?: (
    event: MouseEvent<HTMLAnchorElement>,
    navItem: SidebarNavItem
  ) => void;
  style?: CSSProperties;
  subNavMenu: Record<string, SidebarSubNavItem[]>;
}
