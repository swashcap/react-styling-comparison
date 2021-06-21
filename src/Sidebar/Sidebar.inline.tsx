import type { FC } from "react";
import { useState } from "react";

import { SidebarProps } from "./SidebarTypes";
import {
  colorDarkBlue,
  colorDarkGray,
  colorDarkGreen,
  colorGray,
  colorLightGray,
  colorMidGray,
  colorMoonGray,
  colorNearWhite,
  colorSilver,
  colorWhite,
  spaceExtraSmall,
  spaceSmall,
  spaceMedium,
} from "../utilities/constants";

export const Sidebar: FC<SidebarProps> = ({
  account,
  className,
  onNavItemClick,
  navItems,
  subNavMenu,
  style,
}) => {
  const subNavMenuKeys = Object.keys(subNavMenu);
  const [activeSubNavIndex, setActiveSubNavIndex] = useState(0);

  return (
    <div
      className={className}
      style={{
        background: colorNearWhite,
        color: colorDarkGray,
        display: "flex",
        flexDirection: "column",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, helvetica, 'helvetica neue', ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
        justifyContent: "space-between",
        lineHeight: "1.5",
        ...style,
      }}
    >
      <div>
        <nav>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: spaceSmall,
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
                      background: active ? colorLightGray : "transparent",
                      borderRadius: ".125rem",
                      color: active ? colorDarkBlue : colorDarkGray,
                      display: "block",
                      padding: spaceSmall,
                      textDecoration: "none",
                    }}
                  >
                    <i
                      aria-hidden
                      className={`far fa-${icon} fa-1x`}
                      style={{
                        marginRight: spaceSmall,
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
              borderTopColor: colorMoonGray,
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              padding: `${spaceMedium} 0`,
            }}
          >
            <h3
              style={{
                color: colorGray,
                fontSize: ".75rem",
                fontWeight: 500,
                margin: `0 ${spaceMedium} ${spaceExtraSmall}`,
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
                    padding: `0 ${spaceSmall}`,
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
                      color: colorDarkGray,
                      cursor: "pointer",
                      display: "flex",
                      fontFamily: "inherit",
                      fontSize: "1rem",
                      justifyContent: "space-between",
                      lineHeight: "1.5",
                      margin: 0,
                      padding: spaceSmall,
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
                        color: colorSilver,
                        marginLeft: spaceSmall,
                        marginTop: spaceExtraSmall,
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
                              color: colorDarkGray,
                              display: "block",
                              padding: `${spaceExtraSmall} ${spaceSmall} ${spaceExtraSmall} ${spaceMedium}`,
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
          borderTopColor: colorMoonGray,
          borderTopStyle: "solid",
          borderTopWidth: "1px",
          display: "flex",
          justifyContent: "space-between",
          padding: spaceMedium,
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
              background: colorDarkGreen,
              borderRadius: "100%",
              color: colorWhite,
              flex: "none",
              fontSize: ".875rem",
              fontWeight: 600,
              height: "2rem",
              lineHeight: "2rem",
              marginLeft: `calc(-1 * ${spaceExtraSmall})`,
              marginRight: spaceSmall,
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
                color: colorDarkGray,
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
                color: colorMidGray,
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
            margin: `0 calc(-1 * ${spaceSmall}) 0 0`,
            padding: `${spaceSmall} ${spaceMedium}`,
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
