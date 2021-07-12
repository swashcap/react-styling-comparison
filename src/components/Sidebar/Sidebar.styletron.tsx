import type { FC, HTMLAttributes } from "react";
import { useState } from "react";
import { useStyletron } from "styletron-react";

import type { SidebarProps } from "./SidebarTypes";
import { clsx } from "../utilities/clsx";
import { useTheme } from "../utilities/theme";

const SidebarIcon: FC<HTMLAttributes<HTMLElement> & { name: string }> = ({
  className,
  name,
  ...rest
}) => (
  <i aria-hidden className={`far fa-${name} fa-1x ${className}`} {...rest} />
);

export const Sidebar: FC<SidebarProps> = ({
  account,
  className,
  onNavItemClick,
  navItems,
  subNavMenu,
  ...rest
}) => {
  const subNavMenuKeys = Object.keys(subNavMenu);
  const [activeSubNavIndex, setActiveSubNavIndex] = useState(0);
  const [css] = useStyletron();
  const theme = useTheme();
  const { color, fontSize, space } = theme;

  return (
    <div
      className={clsx(
        css({
          background: color.nearWhite,
          color: color.darkGray,
          display: "flex",
          flexDirection: "column",
          fontFamily: theme.fontFamily.sansSerif,
          justifyContent: "space-between",
          lineHeight: theme.lineHeight.copy,
        }),
        className
      )}
      {...rest}
    >
      <div>
        <nav>
          <ul
            className={css({ listStyle: "none", margin: 0, padding: space[2] })}
          >
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <a
                    className={css({
                      background: active ? color.lightGray : undefined,
                      borderRadius: theme.borderRadius[1],
                      color: active ? color.darkBlue : color.darkGray,
                      display: "block",
                      textDecoration: "none",
                      padding: space[2],

                      ":focus": {
                        color: color.blue,
                      },
                      ":hover": {
                        color: color.blue,
                      },
                    })}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                  >
                    <SidebarIcon
                      className={css({ marginRight: space[2] })}
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
            className={css({
              borderTop: `1px solid ${color.moonGray}`,
              paddingBottom: space[3],
              paddingTop: space[3],
            })}
          >
            <h3
              className={css({
                color: color.gray,
                fontSize: fontSize[7],
                fontWeight: theme.fontWeight[500],
                margin: `0 ${space[3]} ${space[1]}`,
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
                  className={css({
                    paddingLeft: space[2],
                    paddingRight: space[2],
                  })}
                  key={key}
                >
                  <button
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    className={css({
                      background: "transparent",
                      border: "none",
                      color: color.darkGray,
                      cursor: "pointer",
                      display: "flex",
                      fontFamily: "inherit",
                      fontSize: fontSize[5],
                      justifyContent: "space-between",
                      lineHeight: theme.lineHeight.copy,
                      margin: 0,
                      padding: space[2],
                      width: "100%",

                      ":focus": {
                        color: color.blue,
                      },
                      ":hover": {
                        color: color.blue,
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
                    className={css({
                      display: isExpanded ? "block" : "none",
                    })}
                    id={controlId}
                  >
                    <ul
                      className={css({
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                      })}
                    >
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <a
                            className={css({
                              borderRadius: theme.borderRadius[1],
                              color: color.darkGray,
                              display: "block",
                              padding: `${space[1]} ${space[2]} ${space[1]} ${space[3]}`,
                              textDecoration: "none",

                              ":focus": {
                                color: color.blue,
                              },
                              ":hover": {
                                color: color.blue,
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
        className={css({
          alignItems: "center",
          borderTop: `1px solid ${color.moonGray}`,
          display: "flex",
          justifyContent: "space-between",
          padding: space[3],
        })}
      >
        <div className={css({ alignItems: "center", display: "flex" })}>
          <div
            aria-hidden
            className={css({
              background: color.darkGreen,
              borderRadius: "100%",
              color: color.white,
              flex: "none",
              fontSize: fontSize[6],
              fontWeight: theme.fontWeight[600],
              height: "2rem",
              lineHeight: "2rem",
              marginLeft: `calc(-1 * ${space[1]})`,
              marginRight: space[2],
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
              className={css({
                color: color.darkGray,
                fontSize: fontSize[5],
                fontWeight: theme.fontWeight[500],
                lineHeight: theme.lineHeight.solid,
                margin: 0,
              })}
            >
              {account.name}
            </h3>
            <a
              className={css({
                color: color.midGray,
                fontSize: fontSize[6],
                lineHeight: theme.lineHeight.solid,
                textDecoration: "underline",

                ":focus": {
                  color: color.blue,
                },
                ":hover": {
                  color: color.blue,
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
          className={css({
            background: "transparent",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            fontFamily: "inherit",
            margin: `0 calc(-1 * ${space[2]}) 0 0`,
            padding: `${space[2]} ${space[3]}`,

            ":focus": {
              color: color.blue,
            },
            ":hover": {
              color: color.blue,
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
