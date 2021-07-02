import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import { useRef, useState } from "react";

import type { SidebarProps } from "./SidebarTypes";
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
  colorBlue,
} from "../utilities/constants";
import { useFocus } from "../utilities/useFocus";
import { useHover } from "../utilities/useHover";

const SidebarNavListLink: FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }
> = ({ active, style, ...rest }) => {
  const ref = useRef<HTMLAnchorElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <a
      ref={ref}
      style={{
        background: active ? colorLightGray : "transparent",
        borderRadius: ".125rem",
        color:
          isFocused || isHovered
            ? colorBlue
            : active
            ? colorDarkBlue
            : colorDarkGray,
        display: "block",
        padding: spaceSmall,
        textDecoration: "none",
        ...style,
      }}
      {...rest}
    />
  );
};

const SidebarProjectButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLButtonElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <button
      ref={ref}
      style={{
        background: "transparent",
        border: 0,
        color: isFocused || isHovered ? colorBlue : colorDarkGray,
        cursor: "pointer",
        display: "flex",
        fontFamily: "inherit",
        fontSize: "1rem",
        justifyContent: "space-between",
        lineHeight: "1.5",
        margin: 0,
        padding: spaceSmall,
        width: "100%",
        ...style,
      }}
      type="button"
      {...rest}
    />
  );
};

const SidebarProjectLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLAnchorElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <a
      ref={ref}
      style={{
        borderRadius: ".125rem",
        color: isFocused || isHovered ? colorBlue : colorDarkGray,
        display: "block",
        padding: `${spaceExtraSmall} ${spaceSmall} ${spaceExtraSmall} ${spaceMedium}`,
        textDecoration: "none",
        ...style,
      }}
      {...rest}
    />
  );
};

const SidebarAccountLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLAnchorElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <a
      ref={ref}
      style={{
        color: isFocused || isHovered ? colorBlue : colorMidGray,
        fontSize: ".875rem",
        lineHeight: "1",
        textDecoration: "underline",
        ...style,
      }}
      {...rest}
    />
  );
};

const SidebarAccountButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  style,
  ...rest
}) => {
  const ref = useRef<HTMLButtonElement>();
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);

  return (
    <button
      ref={ref}
      style={{
        background: "transparent",
        border: 0,
        color: isFocused || isHovered ? colorBlue : "inherit",
        cursor: "pointer",
        fontFamily: "inherit",
        margin: `0 calc(-1 * ${spaceSmall}) 0 0`,
        padding: `${spaceSmall} ${spaceMedium}`,
        ...style,
      }}
      type="button"
      {...rest}
    />
  );
};

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
                  <SidebarNavListLink
                    active={active}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
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
                  </SidebarNavListLink>
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
                  <SidebarProjectButton
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
                      style={{
                        color: colorSilver,
                        marginLeft: spaceSmall,
                        marginTop: spaceExtraSmall,
                        verticalAlign: "bottom",
                      }}
                    />
                  </SidebarProjectButton>
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
                          <SidebarProjectLink href={url}>
                            {name}
                          </SidebarProjectLink>
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
            <SidebarAccountLink href={account.profileURL}>
              View profile
            </SidebarAccountLink>
          </div>
        </div>
        <SidebarAccountButton
          aria-label="Go to settings"
          onClick={account.onSettingsClick}
          type="button"
        >
          <i className="far fa-sun fa-1x" />
        </SidebarAccountButton>
      </div>
    </div>
  );
};
