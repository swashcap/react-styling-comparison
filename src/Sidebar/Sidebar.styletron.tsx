import type { AnchorHTMLAttributes, FC, HTMLAttributes } from "react";
import { useState } from "react";

import type { SidebarProps } from "./SidebarTypes";
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

const SidebarNavList = styled("ul", ({ $theme }) => ({
  listStyle: "none",
  margin: 0,
  padding: $theme.space.small,
}));

const SidebarNavLink = styled<
  "a",
  AnchorHTMLAttributes<HTMLAnchorElement> & { $active?: boolean }
>("a", ({ $active, $theme }) => ({
  background: $active ? $theme.color.lightGray : undefined,
  borderRadius: $theme.borderRadius["1"],
  color: $active ? $theme.color.darkBlue : $theme.color.darkGray,
  display: "block",
  textDecoration: "none",
  padding: $theme.space.small,

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarNavLinkIcon = styled("i", ({ $theme }) => ({
  marginRight: $theme.space.small,
}));

const SidebarSubNav = styled("nav", ({ $theme }) => ({
  borderTop: `1px solid ${$theme.color.moonGray}`,
  padding: `${$theme.space.medium} 0`,
}));

const SidebarSubNavHeading = styled("h3", ({ $theme }) => ({
  color: $theme.color.gray,
  fontSize: $theme.fontSize["7"],
  fontWeight: 500,
  margin: `0 ${$theme.space.medium} ${$theme.space.extraSmall}`,
  textTransform: "uppercase",
}));

const SidebarSubNavItem = styled("div", ({ $theme }) => ({
  padding: `0 ${$theme.space.small}`,
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
  padding: $theme.space.small,
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
  border: "none",
  borderRadius: $theme.borderRadius[1],
  color: $theme.color.darkGray,
  display: "block",
  padding: `${$theme.space.extraSmall} ${$theme.space.small} ${$theme.space.extraSmall} ${$theme.space.medium}`,
  textDecoration: "none",

  ":focus": {
    color: $theme.color.blue,
  },
  ":hover": {
    color: $theme.color.blue,
  },
}));

const SidebarAccount = styled("div", ({ $theme }) => ({
  alignItems: "center",
  borderTop: `1px solid ${$theme.color.moonGray}`,
  display: "flex",
  justifyContent: "space-between",
  padding: $theme.space.medium,
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
  fontSize: ".875rem",
  fontWeight: 600,
  height: "2rem",
  lineHeight: "2rem",
  marginLeft: `calc(-1 * ${$theme.space.extraSmall})`,
  marginRight: $theme.space.small,
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
  border: "none",
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
  margin: `0 calc(-1 * ${$theme.space.small}) 0 0`,
  padding: `${$theme.space.small} ${$theme.space.medium}`,

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
                    <SidebarNavLinkIcon
                      aria-hidden
                      className={`far fa-${icon} fa-1x`}
                    />
                    {name}
                  </SidebarNavLink>
                </li>
              );
            })}
          </SidebarNavList>
        </nav>
        {subNavMenuKeys.length > 0 && (
          <SidebarSubNav>
            <SidebarSubNavHeading>Projects</SidebarSubNavHeading>
            {subNavMenuKeys.map((key, index) => {
              const buttonId = `sidebar-${index}-button`;
              const controlId = `sidebar-${index}-content`;
              const isExpanded = index === activeSubNavIndex;

              if (!subNavMenu[key].length) {
                return null;
              }

              return (
                <SidebarSubNavItem key={key}>
                  <SidebarSubNavButton
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    id={buttonId}
                    onClick={() => {
                      setActiveSubNavIndex(isExpanded ? -1 : index);
                    }}
                  >
                    <span>{key}</span>
                    <i
                      aria-hidden
                      className={`far fa-1x fa-caret-square-${
                        isExpanded ? "down" : "up"
                      }`}
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
                </SidebarSubNavItem>
              );
            })}
          </SidebarSubNav>
        )}
      </div>
      <SidebarAccount>
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
          <i className="far fa-sun fa-1x" />
        </SidebarAccountButton>
      </SidebarAccount>
    </BaseSidebar>
  );
};
