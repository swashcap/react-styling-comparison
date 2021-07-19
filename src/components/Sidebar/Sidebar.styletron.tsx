import type { FC, HTMLAttributes } from "react";
import { useState } from "react";
import { useStyletron } from "styletron-react";

import type { SidebarProps } from "./SidebarTypes";
import { Box } from "../Box/Box.styletron";
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
    <Box
      bg="nearWhite"
      className={clsx(
        css({
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
          <Box as="ul" className={css({ listStyle: "none" })} ma={0} pa={2}>
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <Box
                    as="a"
                    bg={active ? "lightGray" : undefined}
                    className={css({
                      borderRadius: theme.borderRadius[1],
                      color: active ? color.darkBlue : color.darkGray,
                      display: "block",
                      textDecoration: "none",

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
                    pa={2}
                  >
                    <SidebarIcon
                      className={css({ marginRight: space[2] })}
                      name={icon}
                    />
                    {name}
                  </Box>
                </li>
              );
            })}
          </Box>
        </nav>
        {subNavMenuKeys.length > 0 && (
          <Box
            as="nav"
            pv={3}
            className={css({
              borderTop: `1px solid ${color.moonGray}`,
            })}
          >
            <Box
              as="h3"
              className={css({
                color: color.gray,
                fontSize: fontSize[7],
                fontWeight: theme.fontWeight[500],
                textTransform: "uppercase",
              })}
              mb={0}
              mt={0}
              mv={3}
            >
              Projects
            </Box>
            {subNavMenuKeys.map((key, index) => {
              const buttonId = `sidebar-${index}-button`;
              const controlId = `sidebar-${index}-content`;
              const isExpanded = index === activeSubNavIndex;

              if (!subNavMenu[key].length) {
                return null;
              }

              return (
                <Box ph={2} key={key}>
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
                    <Box
                      as="ul"
                      className={css({
                        listStyle: "none",
                      })}
                      ma={0}
                      pa={0}
                    >
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <Box
                            as="a"
                            className={css({
                              borderRadius: theme.borderRadius[1],
                              color: color.darkGray,
                              display: "block",
                              textDecoration: "none",

                              ":focus": {
                                color: color.blue,
                              },
                              ":hover": {
                                color: color.blue,
                              },
                            })}
                            href={url}
                            pl={3}
                            pr={2}
                            pv={1}
                          >
                            {name}
                          </Box>
                        </li>
                      ))}
                    </Box>
                  </div>
                </Box>
              );
            })}
          </Box>
        )}
      </div>
      <Box
        className={css({
          alignItems: "center",
          borderTop: `1px solid ${color.moonGray}`,
          display: "flex",
          justifyContent: "space-between",
        })}
        pa={3}
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
            <Box
              as="h3"
              className={css({
                color: color.darkGray,
                fontSize: fontSize[5],
                fontWeight: theme.fontWeight[500],
                lineHeight: theme.lineHeight.solid,
              })}
              ma={0}
            >
              {account.name}
            </Box>
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
      </Box>
    </Box>
  );
};
