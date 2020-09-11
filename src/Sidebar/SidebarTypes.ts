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
    onSettingsClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    profileURL: string;
  };
  className?: string;
  navItems: SidebarNavItem[];
  onNavItemClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    navItem: SidebarNavItem
  ) => void;
  subNavMenu: Record<string, SidebarSubNavItem[]>;
}
