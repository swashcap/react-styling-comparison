import type { FC } from "react";
import { useState } from "react";
import { Story } from "@storybook/react";

import { Sidebar as SidebarTachyons } from "./Sidebar.tachyons";
import { Sidebar as SidebarCSSModules } from "./Sidebar.cssmodules";
import { Sidebar as SidebarInline } from "./Sidebar.inline";
import { SidebarProps } from "./SidebarTypes";

import args from "./args.json";

export default {
  args,
  title: "Sidebar",
};

const WithNavItems: FC<SidebarProps & { children: FC<SidebarProps> }> = ({
  children: Component,
  navItems,
  ...rest
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Component
      onNavItemClick={(event, navItem) => {
        event.preventDefault();
        setActiveIndex(navItems.findIndex(({ url }) => url === navItem.url));
      }}
      navItems={navItems.map((item, index) => {
        if (index === activeIndex) {
          return { active: true, ...item };
        }

        return item;
      })}
      {...rest}
    />
  );
};

export const CSSModules: Story<SidebarProps> = (args) => (
  <WithNavItems {...args}>
    {(props) => <SidebarCSSModules {...props} />}
  </WithNavItems>
);

CSSModules.storyName = "CSS Modules";

export const InlineStyles: Story<SidebarProps> = (args) => (
  <WithNavItems {...args}>
    {(props) => <SidebarInline {...props} />}
  </WithNavItems>
);

export const Tachyons: Story<SidebarProps> = (args) => (
  <WithNavItems {...args}>
    {(props) => <SidebarTachyons {...props} />}
  </WithNavItems>
);
