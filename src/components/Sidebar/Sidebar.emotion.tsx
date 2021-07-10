import type { FC, HTMLAttributes } from "react";
import { useState } from "react";

import type { SidebarProps } from "./SidebarTypes";
import { Theme } from "../utilities/theme";

const SidebarIcon: FC<HTMLAttributes<HTMLElement> & { name: string }> = ({
  className,
  name,
  ...rest
}) => (
  <i aria-hidden className={`far fa-${name} fa-1x ${className}`} {...rest} />
);

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
    <div
      css={(theme: Theme) => ({
        background: theme.color.nearWhite,
        color: theme.color.darkGray,
        display: "flex",
        flexDirection: "column",
        fontFamily: theme.fontFamily.sansSerif,
        justifyContent: "space-between",
        lineHeight: theme.lineHeight.copy,
      })}
      {...rest}
    >
      <div>
        <nav>
          <ul
            css={(theme: Theme) => ({
              listStyle: "none",
              margin: 0,
              padding: theme.space[2],
            })}
          >
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <a
                    css={(theme: Theme) => ({
                      background: active ? theme.color.lightGray : undefined,
                      borderRadius: theme.borderRadius[1],
                      color: active
                        ? theme.color.darkBlue
                        : theme.color.darkGray,
                      display: "block",
                      textDecoration: "none",
                      padding: theme.space[2],

                      "&:focus, &:hover": {
                        color: theme.color.blue,
                      },
                    })}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                  >
                    <SidebarIcon
                      css={(theme: Theme) => ({
                        marginRight: theme.space[2],
                      })}
                      name={icon}
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
            css={(theme) => ({
              borderTop: `1px solid ${theme.color.moonGray}`,
              paddingBottom: theme.space[3],
              paddingTop: theme.space[3],
            })}
          >
            <h3
              css={(theme: Theme) => ({
                color: theme.color.gray,
                fontSize: theme.fontSize[7],
                fontWeight: theme.fontWeight[500],
                margin: `0 ${theme.space[3]} ${theme.space[1]}`,
                textTransform: "uppercase",
              })}
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
                  css={(theme: Theme) => ({
                    paddingLeft: theme.space[2],
                    paddingRight: theme.space[2],
                  })}
                  key={key}
                >
                  <button
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    css={(theme: Theme) => ({
                      background: "transparent",
                      border: "none",
                      color: theme.color.darkGray,
                      cursor: "pointer",
                      display: "flex",
                      fontFamily: "inherit",
                      fontSize: theme.fontSize[5],
                      justifyContent: "space-between",
                      lineHeight: theme.lineHeight.copy,
                      margin: 0,
                      padding: theme.space[2],
                      width: "100%",

                      "&:focus, &:hover": {
                        color: theme.color.blue,
                      },
                    })}
                    id={buttonId}
                    onClick={() => {
                      setActiveSubNavIndex(isExpanded ? -1 : index);
                    }}
                    type="button"
                  >
                    <span>{key}</span>
                    <SidebarIcon
                      name={`caret-square-${isExpanded ? "down" : "up"}`}
                    />
                  </button>
                  <div
                    aria-labelledby={buttonId}
                    css={{
                      display: isExpanded ? "block" : "none",
                    }}
                    id={controlId}
                  >
                    <ul
                      css={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                      }}
                    >
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <a
                            css={(theme: Theme) => ({
                              borderRadius: theme.borderRadius[1],
                              color: theme.color.darkGray,
                              display: "block",
                              padding: `${theme.space[1]} ${theme.space[2]} ${theme.space[1]} ${theme.space[3]}`,
                              textDecoration: "none",

                              "&:focus, &:hover": {
                                color: theme.color.blue,
                              },
                            })}
                            href={url}
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
        css={(theme: Theme) => ({
          alignItems: "center",
          borderTop: `1px solid ${theme.color.moonGray}`,
          display: "flex",
          justifyContent: "space-between",
          padding: theme.space[3],
        })}
      >
        <div css={{ alignItems: "center", display: "flex" }}>
          <div
            aria-hidden
            css={(theme: Theme) => ({
              background: theme.color.darkGreen,
              borderRadius: "100%",
              color: theme.color.white,
              flex: "none",
              fontSize: theme.fontSize[6],
              fontWeight: theme.fontWeight[600],
              height: "2rem",
              lineHeight: "2rem",
              marginLeft: `calc(-1 * ${theme.space[1]})`,
              marginRight: theme.space[2],
              textAlign: "center",
              width: "2rem",
            })}
          >
            {account.name
              .replace(/(\B\w)/g, "")
              .replace(" ", "")
              .toUpperCase()}
          </div>
          <div>
            <h3
              css={(theme: Theme) => ({
                color: theme.color.darkGray,
                fontSize: theme.fontSize[5],
                fontWeight: theme.fontWeight[500],
                lineHeight: theme.lineHeight.solid,
                margin: 0,
              })}
            >
              {account.name}
            </h3>
            <a
              css={(theme: Theme) => ({
                color: theme.color.midGray,
                fontSize: theme.fontSize[6],
                lineHeight: theme.lineHeight.solid,
                textDecoration: "underline",

                "&:focus, &:hover": {
                  color: theme.color.blue,
                },
              })}
              href={account.profileURL}
            >
              View profile
            </a>
          </div>
        </div>
        <button
          aria-label="Go to settings"
          css={(theme: Theme) => ({
            background: "transparent",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            fontFamily: "inherit",
            margin: `0 calc(-1 * ${theme.space[2]}) 0 0`,
            padding: `${theme.space[2]} ${theme.space[3]}`,

            "&:focus": {
              color: theme.color.blue,
            },
          })}
          onClick={account.onSettingsClick}
          type="button"
        >
          <SidebarIcon name="sun" />
        </button>
      </div>
    </div>
  );
};
