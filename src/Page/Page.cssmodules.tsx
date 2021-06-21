import React from "react";
import classNames from "classnames";

import { Button } from "../Button/Button.cssmodules";
import { PageProps, PageItemProps } from "./PageTypes";
import { Sidebar } from "../Sidebar/Sidebar.cssmodules";
import style from "./Page.module.scss";

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
    <a className={style.pageItemLink} href="#">
      <img alt={imageAlt} className={style.pageItemImage} src={imageSrc} />
    </a>
    <div className={style.pageItemText}>
      <h2 className={style.pageItemTextTitle}>{title}</h2>
      <p className={style.pageItemTextDescription}>{description}</p>
    </div>
    <span className={style.pageItemPrice}>{price}</span>
    <div className={style.pageItemButtonWrapper}>
      <Button size="medium">Lorem ipsum</Button>
    </div>
    {fulfillment && (
      <span className={style.pageItemFulfillment}>
        Get it by{" "}
        <span className={style.pageItemFulfillmentDate}>{fulfillment}</span>
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
    <div className={classNames(style.page, className)} {...rest}>
      <a className={style.skipLink} href="#main">
        Skip to main content
      </a>
      <header className={style.header}>
        <Sidebar
          className={classNames(style.headerSidebar, sidebarPropsClassName)}
          {...sidebarProps}
        />
      </header>
      <main className={style.main} id="main">
        {/* BEGIN Lead */}

        <div className={style.lead}>
          <h1 className={style.leadTitle}>{lead.title}</h1>
          <p className={style.leadDescription}>{lead.description}</p>
          <Button onClick={lead.actionOnClick} size="large" variant="primary">
            {lead.actionText}
          </Button>
        </div>

        {/* END Lead */}

        <div className={style.productList}>
          {itemsStart.map((item, index) => (
            <div className={style.productListItem} key={index}>
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Ad */}

        <aside className={style.advertisement}>
          <div className={style.advertisementRow}>
            <div className={style.advertisementImageWrapper}>
              <img
                alt={advertisement.imageAlt}
                className={style.advertisementImage}
                src={advertisement.imageSrc}
              />
            </div>
            <div className={style.advertisementTextWrapper}>
              <h1 className={style.advertisementTitle}>
                {advertisement.title}
              </h1>
              <p className={style.advertisementDescription}>
                {advertisement.description}
              </p>
              <Button size="medium" variant="primary">
                {advertisement.actionText}
              </Button>
            </div>
          </div>
        </aside>

        {/* END Ad */}

        <div className={style.productList}>
          {itemsEnd.map((item, index) => (
            <div className={style.productListItem} key={index}>
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Footer */}

        <div className={style.footer}>
          <div className={style.footerMenus}>
            {footer.menus.map(({ title, links }, index) => (
              <div className={style.footerMenuItem} key={index}>
                <h3 className={style.footerMenuTitle}>{title}</h3>
                <ul className={style.footerMenuLinks}>
                  {links.map(({ name, url }) => (
                    <li key={url}>
                      <a className={style.footerMenuLink} href={url}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside>
            <p className={style.footerFinePrint1}>{footer.finePrint1}</p>
            <Button
              onClick={footer.actionOnClick}
              size="small"
              variant="tertiary"
            >
              {footer.actionText}
            </Button>
            <small className={style.footerFinePrint2}>
              {footer.finePrint2}
            </small>
          </aside>
        </div>

        {/* END Footer */}
      </main>
    </div>
  );
};
