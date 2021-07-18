import type { FC, HTMLAttributes } from "react";
import { useState } from "react";

import type { SidebarProps } from "./SidebarTypes";
import { Box } from "../Box/Box.emotion";
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
    <Box
      bg="nearWhite"
      css={(theme: Theme) => ({
        display: "flex",
        flexDirection: "column",
        fontFamily: theme.fontFamily.sansSerif,
        justifyContent: "space-between",
        lineHeight: theme.lineHeight.copy,
      })}
      textColor="darkGray"
      {...rest}
    >
      <div>
        <nav>
          <Box
            as="ul"
            css={{
              listStyle: "none",
            }}
            ma={0}
            pa={2}
          >
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <Box
                    as="a"
                    bg={active ? "lightGray" : undefined}
                    css={(theme: Theme) => ({
                      borderRadius: theme.borderRadius[1],
                      display: "block",
                      textDecoration: "none",

                      "&:focus, &:hover": {
                        color: theme.color.blue,
                      },
                    })}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                    pa={2}
                    textColor={active ? "darkBlue" : "darkGray"}
                  >
                    <SidebarIcon
                      css={(theme: Theme) => ({
                        marginRight: theme.space[2],
                      })}
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
            css={(theme) => ({
              borderTop: `1px solid ${theme.color.moonGray}`,
            })}
            pv={3}
          >
            <Box
              as="h3"
              css={(theme: Theme) => ({
                fontSize: theme.fontSize[7],
                fontWeight: theme.fontWeight[500],
                textTransform: "uppercase",
              })}
              mb={1}
              mh={3}
              mt={0}
              textColor="gray"
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
                  <Box
                    as="button"
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    css={(theme: Theme) => ({
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      fontFamily: "inherit",
                      fontSize: theme.fontSize[5],
                      justifyContent: "space-between",
                      lineHeight: theme.lineHeight.copy,
                      margin: 0,
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
                    textColor="darkGray"
                    pa={2}
                  >
                    <span>{key}</span>
                    <SidebarIcon
                      name={`caret-square-${isExpanded ? "down" : "up"}`}
                    />
                  </Box>
                  <div
                    aria-labelledby={buttonId}
                    css={{
                      display: isExpanded ? "block" : "none",
                    }}
                    id={controlId}
                  >
                    <Box
                      as="ul"
                      css={{
                        listStyle: "none",
                      }}
                      ma={0}
                      pa={0}
                    >
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <Box
                            as="a"
                            css={(theme: Theme) => ({
                              borderRadius: theme.borderRadius[1],
                              display: "block",
                              textDecoration: "none",

                              "&:focus, &:hover": {
                                color: theme.color.blue,
                              },
                            })}
                            href={url}
                            pl={3}
                            pr={2}
                            pv={1}
                            textColor="darkGray"
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
        css={(theme: Theme) => ({
          alignItems: "center",
          borderTop: `1px solid ${theme.color.moonGray}`,
          display: "flex",
          justifyContent: "space-between",
        })}
        pa={3}
      >
        <div css={{ alignItems: "center", display: "flex" }}>
          <Box
            aria-hidden
            bg="darkGreen"
            css={(theme: Theme) => ({
              borderRadius: "100%",
              flex: "none",
              fontSize: theme.fontSize[6],
              fontWeight: theme.fontWeight[600],
              height: "2rem",
              lineHeight: "2rem",
              marginLeft: `calc(-1 * ${theme.space[1]})`,
              textAlign: "center",
              width: "2rem",
            })}
            mr={2}
            textColor="white"
          >
            {account.name
              .replace(/(\B\w)/g, "")
              .replace(" ", "")
              .toUpperCase()}
          </Box>
          <div>
            <Box
              as="h3"
              css={(theme: Theme) => ({
                fontSize: theme.fontSize[5],
                fontWeight: theme.fontWeight[500],
                lineHeight: theme.lineHeight.solid,
              })}
              ma={0}
              textColor="darkGray"
            >
              {account.name}
            </Box>
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
      </Box>
    </Box>
  );
};
