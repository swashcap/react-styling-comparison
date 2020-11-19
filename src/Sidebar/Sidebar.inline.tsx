import React from "react";

import { SidebarProps } from "./SidebarTypes";

const colors = {
  darkBlue: "#00449e",
  darkGray: "#333",
  darkGreen: "#137752",
  gray: "#777",
  lightGray: "#eee",
  midGray: "#555",
  moonGray: "#ccc",
  nearWhite: "#f4f4f4",
  silver: "#999",
  white: "#fff",
} as const;

const spacing = {
  extraSmall: ".25rem",
  small: ".5rem",
  medium: "1rem",
} as const;

export const Sidebar: React.FC<SidebarProps> = ({
  account,
  className,
  onNavItemClick,
  navItems,
  subNavMenu,
}) => {
  const subNavMenuKeys = Object.keys(subNavMenu);
  const [activeSubNavIndex, setActiveSubNavIndex] = React.useState(0);

  return (
    <div
      className={className}
      style={{
        background: colors.nearWhite,
        color: colors.darkGray,
        display: "flex",
        flexDirection: "column",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
        justifyContent: "space-between",
        lineHeight: "1.5",
      }}
    >
      <div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: spacing.small,
            }}
          >
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <a
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                    style={{
                      background: active ? colors.lightGray : "transparent",
                      borderRadius: ".125rem",
                      color: active ? colors.darkBlue : colors.darkGray,
                      display: "block",
                      padding: spacing.small,
                      textDecoration: "none",
                    }}
                  >
                    <i
                      aria-hidden
                      className={`far fa-${icon} fa-1x`}
                      style={{
                        marginRight: spacing.small,
                      }}
                    />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {subNavMenuKeys.length > 0 && (
          <nav
            style={{
              borderTopColor: colors.moonGray,
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              padding: `${spacing.medium} 0`,
            }}
          >
            <h3
              style={{
                color: colors.gray,
                fontSize: ".75rem",
                fontWeight: 500,
                margin: `0 ${spacing.medium} ${spacing.extraSmall}`,
                textTransform: "uppercase",
              }}
            >
              Projects
            </h3>
            {subNavMenuKeys.map((key, index) => {
              const buttonId = `sidebar-${index}-button`;
              const controlId = `sidebar-${index}-content`;
              const isExpanded = index === activeSubNavIndex;

              if (!subNavMenu[key].length) {
                return null;
              }

              return (
                <div
                  key={key}
                  style={{
                    padding: `0 ${spacing.small}`,
                  }}
                >
                  <button
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    id={buttonId}
                    onClick={() => {
                      setActiveSubNavIndex(isExpanded ? -1 : index);
                    }}
                    style={{
                      background: "transparent",
                      border: 0,
                      color: colors.darkGray,
                      cursor: "pointer",
                      display: "flex",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      justifyContent: "space-between",
                      lineHeight: "1.5",
                      margin: 0,
                      padding: spacing.small,
                      width: "100%",
                    }}
                    type="button"
                  >
                    <span>{key}</span>
                    <i
                      aria-hidden
                      className={`far fa-1x fa-caret-square-${
                        isExpanded ? "down" : "up"
                      }`}
                      style={{
                        color: colors.silver,
                        marginLeft: spacing.small,
                        marginTop: spacing.extraSmall,
                        verticalAlign: "bottom",
                      }}
                    />
                  </button>
                  <div
                    aria-labelledby={buttonId}
                    id={controlId}
                    style={{
                      display: isExpanded ? "block" : "none",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <a
                            href={url}
                            style={{
                              borderRadius: ".125rem",
                              color: colors.darkGray,
                              display: "block",
                              padding: `${spacing.extraSmall} ${spacing.small} ${spacing.extraSmall} ${spacing.medium}`,
                              textDecoration: "none",
                            }}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>
        )}
      </div>
      <div
        style={{
          alignItems: "center",
          borderTopColor: colors.moonGray,
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          display: "flex",
          justifyContent: "space-between",
          padding: spacing.medium,
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            aria-hidden
            style={{
              background: colors.darkGreen,
              borderRadius: "100%",
              color: colors.white,
              flex: "none",
              fontSize: ".875rem",
              fontWeight: 600,
              height: "2rem",
              lineHeight: "2rem",
              marginLeft: `calc(-1 * ${spacing.extraSmall})`,
              marginRight: spacing.small,
              textAlign: "center",
              width: "2rem",
            }}
          >
            {account.name
              .replace(/(\B\w)/g, "")
              .replace(" ", "")
              .toUpperCase()}
          </div>
          <div>
            <h3
              style={{
                color: colors.darkGray,
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: "1",
                margin: 0,
              }}
            >
              {account.name}
            </h3>
            <a
              href={account.profileURL}
              style={{
                color: colors.midGray,
                fontSize: ".875rem",
                lineHeight: "1",
                textDecoration: "underline",
              }}
            >
              View profile
            </a>
          </div>
        </div>
        <button
          aria-label="Go to settings"
          onClick={account.onSettingsClick}
          style={{
            background: "transparent",
            border: 0,
            color: "inherit",
            cursor: "pointer",
            fontFamily: "inherit",
            margin: `0 calc(-1 * ${spacing.small}) 0 0`,
            padding: `${spacing.small} ${spacing.medium}`,
          }}
          title="Settings"
          type="button"
        >
          <i className="far fa-sun fa-1x" />
        </button>
      </div>
    </div>
  );
};
