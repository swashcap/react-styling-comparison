import type { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";
import { useState } from "react";

import type { SidebarProps } from "./SidebarTypes";
import { Box } from "../utilities/Box";
import { styled } from "../utilities/theme";

const BaseSidebar = styled("div", ({ $theme }) => ({
  background: $theme.color.nearWhite,
  color: $theme.color.darkGray,
  display: "flex",
  flexDirection: "column",
  fontFamily: $theme.fontFamily.sansSerif,
  justifyContent: "space-between",
  lineHeight: $theme.lineHeight.copy,
}));

const SidebarIcon: FC<HTMLAttributes<HTMLElement> & { name: string }> = ({
  className,
  name,
  ...rest
}) => (
  <i aria-hidden className={`far fa-${name} fa-1x ${className}`} {...rest} />
);

const SidebarNavList = styled("ul", ({ $theme }) => ({
  listStyle: "none",
  margin: 0,
  padding: $theme.space[2],
}));

const SidebarNavLink = styled<
  "a",
  AnchorHTMLAttributes<HTMLAnchorElement> & { $active?: boolean }
>("a", ({ $active, $theme }) => ({
  background: $active ? $theme.color.lightGray : undefined,
  borderRadius: $theme.borderRadius[1],
  color: $active ? $theme.color.darkBlue : $theme.color.darkGray,
  display: "block",
  textDecoration: "none",
  padding: $theme.space[2],

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarNavLinkIcon = styled(SidebarIcon, ({ $theme }) => ({
  marginRight: $theme.space[2],
}));

const SidebarSubNav = styled(Box, ({ $theme }) => ({
  borderTop: `1px solid ${$theme.color.moonGray}`,
}));

const SidebarSubNavHeading = styled("h3", ({ $theme }) => ({
  color: $theme.color.gray,
  fontSize: $theme.fontSize["7"],
  fontWeight: $theme.fontWeight[500],
  margin: `0 ${$theme.space[3]} ${$theme.space[1]}`,
  textTransform: "uppercase",
}));

const SidebarSubNavButton = styled("button", ({ $theme }) => ({
  background: "transparent",
  border: "none",
  color: $theme.color.darkGray,
  cursor: "pointer",
  display: "flex",
  fontFamily: "inherit",
  fontSize: $theme.fontSize[5],
  justifyContent: "space-between",
  lineHeight: $theme.lineHeight.copy,
  margin: 0,
  padding: $theme.space[2],
  width: "100%",

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarSubNavItems = styled<
  "div",
  HTMLAttributes<HTMLDivElement> & { $isExpanded: boolean }
>("div", ({ $isExpanded }) => ({
  display: $isExpanded ? "block" : "none",
}));

const SidebarSubNavItemsList = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

const SidebarSubNavItemsLink = styled("a", ({ $theme }) => ({
  borderRadius: $theme.borderRadius[1],
  color: $theme.color.darkGray,
  display: "block",
  padding: `${$theme.space[1]} ${$theme.space[2]} ${$theme.space[1]} ${$theme.space[3]}`,
  textDecoration: "none",

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarAccount = styled(Box, ({ $theme }) => ({
  alignItems: "center",
  borderTop: `1px solid ${$theme.color.moonGray}`,
  display: "flex",
  justifyContent: "space-between",
}));

const SidebarAccountWrapper = styled("div", {
  alignItems: "center",
  display: "flex",
});

const SidebarAccountAvatar = styled("div", ({ $theme }) => ({
  background: $theme.color.darkGreen,
  borderRadius: "100%",
  color: $theme.color.white,
  flex: "none",
  fontSize: $theme.fontSize[6],
  fontWeight: $theme.fontWeight[600],
  height: "2rem",
  lineHeight: "2rem",
  marginLeft: `calc(-1 * ${$theme.space[1]})`,
  marginRight: $theme.space[2],
  textAlign: "center",
  width: "2rem",
}));

const SidebarAccountName = styled("h3", ({ $theme }) => ({
  color: $theme.color.darkGray,
  fontSize: $theme.fontSize[5],
  fontWeight: 500,
  lineHeight: $theme.lineHeight.solid,
  margin: 0,
}));

const SidebarAccountLink = styled("a", ({ $theme }) => ({
  color: $theme.color.midGray,
  fontSize: $theme.fontSize[6],
  lineHeight: $theme.lineHeight.solid,
  textDecoration: "underline",

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarAccountButton = styled("button", ({ $theme }) => ({
  background: "transparent",
  border: "none",
  color: "inherit",
  cursor: "pointer",
  fontFamily: "inherit",
  margin: `0 calc(-1 * ${$theme.space[2]}) 0 0`,
  padding: `${$theme.space[2]} ${$theme.space[3]}`,

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

export const Sidebar: FC<SidebarProps> = ({
  account,
  onNavItemClick,
  navItems,
  subNavMenu,
  ...rest
}) => {
  const subNavMenuKeys = Object.keys(subNavMenu);
  const [activeSubNavIndex, setActiveSubNavIndex] = useState(0);

  return (
    <BaseSidebar {...rest}>
      <div>
        <nav>
          <SidebarNavList>
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <SidebarNavLink
                    $active={active}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                  >
                    <SidebarNavLinkIcon name={icon} />
                    {name}
                  </SidebarNavLink>
                </li>
              );
            })}
          </SidebarNavList>
        </nav>
        {subNavMenuKeys.length > 0 && (
          <SidebarSubNav as="nav" pl={3} pr={3}>
            <SidebarSubNavHeading>Projects</SidebarSubNavHeading>
            {subNavMenuKeys.map((key, index) => {
              const buttonId = `sidebar-${index}-button`;
              const controlId = `sidebar-${index}-content`;
              const isExpanded = index === activeSubNavIndex;

              if (!subNavMenu[key].length) {
                return null;
              }

              return (
                <Box key={key} pl={2} pr={2}>
                  <SidebarSubNavButton
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    id={buttonId}
                    onClick={() => {
                      setActiveSubNavIndex(isExpanded ? -1 : index);
                    }}
                  >
                    <span>{key}</span>
                    <SidebarIcon
                      name={`caret-square-${isExpanded ? "down" : "up"}`}
                    />
                  </SidebarSubNavButton>
                  <SidebarSubNavItems
                    $isExpanded={isExpanded}
                    aria-labelledby={buttonId}
                    id={controlId}
                  >
                    <SidebarSubNavItemsList>
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <SidebarSubNavItemsLink href={url}>
                            {name}
                          </SidebarSubNavItemsLink>
                        </li>
                      ))}
                    </SidebarSubNavItemsList>
                  </SidebarSubNavItems>
                </Box>
              );
            })}
          </SidebarSubNav>
        )}
      </div>
      <SidebarAccount pa={3}>
        <SidebarAccountWrapper>
          <SidebarAccountAvatar aria-hidden>
            {account.name
              .replace(/(\B\w)/g, "")
              .replace(" ", "")
              .toUpperCase()}
          </SidebarAccountAvatar>
          <div>
            <SidebarAccountName>{account.name}</SidebarAccountName>
            <SidebarAccountLink href={account.profileURL}>
              View profile
            </SidebarAccountLink>
          </div>
        </SidebarAccountWrapper>
        <SidebarAccountButton
          aria-label="Go to settings"
          onClick={account.onSettingsClick}
          type="button"
        >
          <SidebarIcon name="sun" />
        </SidebarAccountButton>
      </SidebarAccount>
    </BaseSidebar>
  );
};
