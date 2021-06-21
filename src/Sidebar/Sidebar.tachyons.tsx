import type { FC } from "react";
import { useState } from "react";
import classNames from "classnames";

import { SidebarProps } from "./SidebarTypes";

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

  return (
    <div
      className={classNames(
        "bg-near-white dark-gray flex flex-column lh-copy justify-between sans-serif",
        className
      )}
      {...rest}
    >
      <div>
        <nav>
          <ul className="list ma0 pa2">
            {navItems.map((item) => {
              const { active, icon, name, url } = item;

              return (
                <li key={url}>
                  <a
                    className={classNames(
                      "br1 dark-gray db hover-blue no-underline pa2",
                      active && "bg-light-gray dark-blue"
                    )}
                    href={url}
                    onClick={(event) => {
                      onNavItemClick(event, item);
                    }}
                  >
                    <i aria-hidden className={`far fa-${icon} fa-1x mr2`} />
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        {subNavMenuKeys.length > 0 && (
          <nav className="bt b--moon-gray pv3">
            <h3 className="gray f7 fw5 mh3 mb1 mt0 ttu">Projects</h3>
            {subNavMenuKeys.map((key, index) => {
              const buttonId = `sidebar-${index}-button`;
              const controlId = `sidebar-${index}-content`;
              const isExpanded = index === activeSubNavIndex;

              if (!subNavMenu[key].length) {
                return null;
              }

              return (
                <div className="ph2" key={key}>
                  <button
                    aria-controls={controlId}
                    aria-expanded={isExpanded}
                    className="bn bg-transparent dark-gray f5 flex hover-blue justify-between lh-copy ma0 pa2 pointer sans-serif w-100"
                    id={buttonId}
                    onClick={() => {
                      setActiveSubNavIndex(isExpanded ? -1 : index);
                    }}
                    type="button"
                  >
                    <span>{key}</span>
                    <i
                      aria-hidden
                      className={classNames(
                        "far fa-1x silver ml2 mt1 v-btm",
                        isExpanded && "fa-caret-square-down",
                        !isExpanded && "fa-caret-square-up"
                      )}
                    />
                  </button>
                  <div
                    aria-labelledby={buttonId}
                    className={isExpanded ? "db" : "dn"}
                    id={controlId}
                  >
                    <ul className="list ma0 pa0">
                      {subNavMenu[key].map(({ name, url }) => (
                        <li key={url}>
                          <a
                            className="br1 db dark-gray hover-blue no-underline pl3 pr2 pv1"
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
      <div className="bt b--moon-gray flex items-center justify-between pa3">
        <div className="flex items-center">
          <div
            aria-hidden
            className="bg-dark-green br-pill f6 flex-none fw6 h2 nl1 mr2 tc w2 white"
            style={{
              lineHeight: "2rem",
            }}
          >
            {account.name
              .replace(/(\B\w)/g, "")
              .replace(" ", "")
              .toUpperCase()}
          </div>
          <div>
            <h3 className="dark-gray f5 fw5 lh-solid mv0">{account.name}</h3>
            <a
              className="f6 lh-solid mid-gray hover-blue underline"
              href={account.profileURL}
            >
              View profile
            </a>
          </div>
        </div>
        <button
          aria-label="Go to settings"
          className="bn bg-transparent color-inherit hover-blue ml0 mv0 nr2 ph3 pv2 pointer sans-serif"
          onClick={account.onSettingsClick}
          title="Settings"
          type="button"
        >
          <i className="far fa-sun fa-1x" />
        </button>
      </div>
    </div>
  );
};
