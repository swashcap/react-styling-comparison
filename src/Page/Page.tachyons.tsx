import React from "react";
import classNames from "classnames";

import { Button } from "../Button/Button.tachyons";
import { PageProps, PageItemProps } from "./PageTypes";
import { Sidebar } from "../Sidebar/Sidebar.tachyons";

const PageItem: React.FC<PageItemProps> = ({
  description,
  fulfillment,
  imageAlt,
  imageSrc,
  price,
  title,
  ...rest
}) => (
  <article {...rest}>
    <a className="db dim mb2" href="#">
      <img alt={imageAlt} className="db w-100" src={imageSrc} />
    </a>
    <div className="mb1">
      <h2 className="di f5 lh-copy ma0 pr1">{title}</h2>
      <p className="di f6 ma0 mid-gray">{description}</p>
    </div>
    <span className="db f4 mb2 orange">{price}</span>
    <div className="mb2">
      <Button size="medium">Lorem ipsum</Button>
    </div>
    {fulfillment && (
      <span className="mid-gray f6">
        Get it by <span className="green">{fulfillment}</span>
      </span>
    )}
  </article>
);

export const Page: React.FC<PageProps> = ({
  advertisement,
  className,
  footer,
  items,
  lead,
  sidebarProps: { className: sidebarPropsClassName, ...sidebarProps },
  ...rest
}) => {
  const itemsStart = items.slice(0, 12);
  const itemsEnd = items.slice(12);

  return (
    <div
      className={classNames(
        "flex flex-wrap overflow-y-hidden-l vh-100-l",
        className
      )}
      {...rest}
    >
      <a className="clip" href="#main">
        Skip to main content
      </a>
      <header className="w-100 w-25-l">
        <Sidebar
          className={classNames(
            "overflow-y-scroll-l vh-100-l",
            sidebarPropsClassName
          )}
          {...sidebarProps}
        />
      </header>
      <main
        className="overflow-y-scroll-l pa4 sans-serif vh-100-l w-100 w-75-l"
        id="main"
      >
        {/* BEGIN Lead */}

        <div className="bg-lightest-blue br2 dark-gray mb4 pa4">
          <h1 className="f1 fw8 lh-title mb2 mt0">{lead.title}</h1>
          <p className="f3 lh-copy mb3 mt0">{lead.description}</p>
          <Button onClick={lead.actionOnClick} size="large" variant="primary">
            {lead.actionText}
          </Button>
        </div>

        {/* END Lead */}

        <div className="flex flex-wrap mb4 nl2 nr2">
          {itemsStart.map((item, index) => (
            <div
              className="mb3 mb4-m mb4-l ph2 w-100 w-third-m w-25-l"
              key={index}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Ad */}

        <aside className="bg-near-white br2 mb4 pa3">
          <div className="flex flex-wrap nl2 nr2">
            <div className="ph2 w-100 w-two-thirds-m w-two-thirds-l">
              <img
                alt={advertisement.imageAlt}
                className="db w-100"
                src={advertisement.imageSrc}
              />
            </div>
            <div className="ph2 w-100 w-third-m w-third-l">
              <h1 className="f4 lh-title mb2 mt0">{advertisement.title}</h1>
              <p className="mb3 mt2">{advertisement.description}</p>
              <Button size="medium" variant="primary">
                {advertisement.actionText}
              </Button>
            </div>
          </div>
        </aside>

        {/* END Ad */}

        <div className="flex flex-wrap mb4 nl2 nr2">
          {itemsEnd.map((item, index) => (
            <div
              className="mb3 mb4-m mb4-l ph2 w-100 w-third-m w-25-l"
              key={index}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Footer */}

        <div className="bt b--silver mid-gray mt4 pb4 pt3">
          <div className="flex flex-wrap mb4 nl2 nr2">
            {footer.menus.map(({ title, links }, index) => (
              <div className="ph2 w-100 w-third-m w-third-l" key={index}>
                <h3 className="b f5 lh-copy mb1 mt0">{title}</h3>
                <ul className="f6 lh-copy list ma0 pa0">
                  {links.map(({ name, url }) => (
                    <li key={url}>
                      <a
                        className="color-inherit hover-blue link underline"
                        href={url}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside>
            <p className="f6 lh-copy mb2 mt0">{footer.finePrint1}</p>
            <Button
              onClick={footer.actionOnClick}
              size="small"
              variant="tertiary"
            >
              {footer.actionText}
            </Button>
            <small className="b--moon-gray bt db f7 gray lh-copy mt3 pt2">
              {footer.finePrint2}
            </small>
          </aside>
        </div>

        {/* END Footer */}
      </main>
    </div>
  );
};
