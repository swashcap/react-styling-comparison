import React from "react";
import { Story } from "@storybook/react";

import { Sidebar as SidebarTachyons } from "./Sidebar.tachyons";
import { Sidebar as SidebarCSSModules } from "./Sidebar.cssmodules";
import { SidebarProps } from "./SidebarTypes";

export default {
  args: {
    account: {
      name: "Pat Garcia",
      profileURL: "/profiles/pat-garcia",
    },
    className: "min-vh-100 mw5",
    navItems: [
      {
        icon: "address-book",
        name: "Addresses",
        url: "#addresses",
      },
      {
        icon: "bell",
        name: "Notifications",
        url: "#notifications",
      },
      {
        icon: "sticky-note",
        name: "Reminders",
        url: "#reminders",
      },
      {
        icon: "heart",
        name: "Saved items",
        url: "#saved",
      },
      {
        icon: "comments",
        name: "Messages",
        url: "#messages",
      },
    ],
    subNavMenu: {
      "In Progress": [
        {
          name: "Pop Up",
          url: "/projects/pop-up",
        },
        {
          name: "Artwork",
          url: "/projects/artwork",
        },
        {
          name: "Crafts",
          url: "/projects/crafts",
        },
      ],
      Backburner: [
        {
          name: "Cubism",
          url: "/projects/cubism",
        },
        {
          name: "Crayon Fire",
          url: "/projects/crayon-fire",
        },
        {
          name: "Decorative Paper Strips",
          url: "/projects/decorative-paper-strips",
        },
        {
          name: "Impressionist Painting as Paper Craft",
          url: "/projects/impressionist-painting-as-paper-craft",
        },
      ],
      Completed: [
        {
          name: "The Moon",
          url: "/projects/the-moon",
        },
        {
          name: "matisseFishes",
          url: "/projects/matisse-fishes",
        },
      ],
    },
  },
  title: "Sidebar",
};

const WithNavItems: React.FC<
  SidebarProps & { children: React.FC<SidebarProps> }
> = ({ children: Component, navItems, ...rest }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

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

export const Tachyons: Story<SidebarProps> = (args) => (
  <WithNavItems {...args}>
    {(props) => <SidebarTachyons {...props} />}
  </WithNavItems>
);
