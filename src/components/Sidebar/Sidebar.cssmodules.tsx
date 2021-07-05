import type { FC } from "react";
import { useState } from "react";

import style from "./Sidebar.module.scss";
import type { SidebarProps } from "./SidebarTypes";
import { clsx } from "../utilities/clsx";

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
    <div className={clsx(style.sidebar, className)} {...rest}>
      <nav>
        <ul className={style.sidebarNavList}>
          {navItems.map((item) => {
            const { active, icon, name, url } = item;

            return (
              <li key={url}>
                <a
                  className={clsx(active && style.sidebarNavListActive)}
                  href={url}
                  onClick={(event) => {
                    onNavItemClick(event, item);
                  }}
                >
                  <i
                    aria-hidden
                    className={clsx(
                      `far fa-${icon} fa-1x`,
                      style.sidebarNavListIcon
                    )}
                  />
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {subNavMenuKeys.length > 0 && (
        <nav className={style.sidebarProjects}>
          <h3 className={style.sidebarProjectsHeading}>Projects</h3>
          {subNavMenuKeys.map((key, index) => {
            const buttonId = `sidebar-${index}-button`;
            const controlId = `sidebar-${index}-content`;
            const isExpanded = index === activeSubNavIndex;

            if (!subNavMenu[key].length) {
              return null;
            }

            return (
              <div className={style.sidebarProjectsGroup} key={key}>
                <button
                  aria-controls={controlId}
                  aria-expanded={isExpanded}
                  className={style.sidebarProjectsGroupTriggerButton}
                  id={buttonId}
                  onClick={() => {
                    setActiveSubNavIndex(isExpanded ? -1 : index);
                  }}
                  type="button"
                >
                  <span>{key}</span>
                  <i
                    aria-hidden
                    className={clsx(
                      "far fa-1x",
                      isExpanded && "fa-caret-square-down",
                      !isExpanded && "fa-caret-square-up"
                    )}
                  />
                </button>
                <div
                  aria-labelledby={buttonId}
                  className={clsx(
                    !isExpanded && style.sidebarProjectGroupHidden
                  )}
                  id={controlId}
                >
                  <ul className={style.sidebarProjectsGroupList}>
                    {subNavMenu[key].map(({ name, url }) => (
                      <li key={url}>
                        <a href={url}>{name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      )}
      <div className={style.sidebarAccount}>
        <div aria-hidden className={style.sidebarAccountAvatar}>
          {account.name
            .replace(/(\B\w)/g, "")
            .replace(" ", "")
            .toUpperCase()}
        </div>
        <div className={style.sidebarAccountGroup}>
          <h3 className={style.sidebarAccountName}>{account.name}</h3>
          <a
            className={style.sidebarAccountProfileLink}
            href={account.profileURL}
          >
            View profile
          </a>
        </div>
        <button
          aria-label="Go to settings"
          className={style.sidebarAccountSettingsButton}
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
