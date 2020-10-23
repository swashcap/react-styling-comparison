import React from "react";
import classNames from "classnames";

import { SidebarProps } from "./SidebarTypes";
import style from "./Sidebar.module.scss";

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
    <div className={classNames(style.sidebar, className)}>
      <nav>
        <ul className={style.navList}>
          {navItems.map((item) => {
            const { active, icon, name, url } = item;

            return (
              <li key={url}>
                <a
                  className={classNames(active && style.navListActive)}
                  href={url}
                  onClick={(event) => {
                    onNavItemClick(event, item);
                  }}
                >
                  <i
                    aria-hidden
                    className={classNames(
                      `far fa-${icon} fa-1x`,
                      style.navListIcon
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
        <nav className={style.projects}>
          <h3 className={style.projectsHeading}>Projects</h3>
          {subNavMenuKeys.map((key, index) => {
            const buttonId = `sidebar-${index}-button`;
            const controlId = `sidebar-${index}-content`;
            const isExpanded = index === activeSubNavIndex;

            if (!subNavMenu[key].length) {
              return null;
            }

            return (
              <div className={style.projectsGroup} key={key}>
                <button
                  aria-controls={controlId}
                  aria-expanded={isExpanded}
                  className={style.projectsGroupTriggerButton}
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
                      "far fa-1x",
                      isExpanded && "fa-caret-square-down",
                      !isExpanded && "fa-caret-square-up"
                    )}
                  />
                </button>
                <div
                  aria-labelledby={buttonId}
                  className={classNames(
                    !isExpanded && style.projectGroupHidden
                  )}
                  id={controlId}
                >
                  <ul className={style.projectsGroupList}>
                    {subNavMenu[key].map(({ name, url }) => (
                      <li key={url}>
                        <a className={style.projectsGroupLink} href={url}>
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
      <div className={style.account}>
        <div aria-hidden className={style.accountAvatar}>
          {account.name
            .replace(/(\B\w)/g, "")
            .replace(" ", "")
            .toUpperCase()}
        </div>
        <div className={style.accountGroup}>
          <h3 className={style.accountName}>{account.name}</h3>
          <a className={style.accountProfileLink} href={account.profileURL}>
            View profile
          </a>
        </div>
        <button
          aria-label="Go to settings"
          className={style.accountSettingsButton}
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
