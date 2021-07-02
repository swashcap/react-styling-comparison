import type { FC } from "react";

import { Button } from "../Button/Button.cssmodules";
import type {
  PageAdvertisementProps,
  PageProps,
  PageItemProps,
} from "./PageTypes";
import { Sidebar } from "../Sidebar/Sidebar.cssmodules";
import { clsx } from "../utilities/clsx";
import style from "./Page.module.scss";

const PageAdvertisement: FC<PageAdvertisementProps> = ({
  actionText,
  className,
  description,
  imageAlt,
  imageSrc,
  title,
  ...rest
}) => (
  <aside className={clsx(style.advertisement, className)} {...rest}>
    <div className={style.pageRow}>
      <div className={clsx(style.pageRowItem, style.advertisementImageWrapper)}>
        <img
          alt={imageAlt}
          className={style.advertisementImage}
          src={imageSrc}
        />
      </div>
      <div className={clsx(style.pageRowItem, style.advertisementTextWrapper)}>
        <h1 className={style.advertisementTitle}>{title}</h1>
        <p className={style.advertisementDescription}>{description}</p>
        <Button size="medium" variant="primary">
          {actionText}
        </Button>
      </div>
    </div>
  </aside>
);

const PageItem: FC<PageItemProps> = ({
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

export const Page: FC<PageProps> = ({
  advertisements,
  className,
  footer,
  header,
  items,
  lead,
  sidebarProps: { className: sidebarPropsClassName, ...sidebarProps },
  ...rest
}) => {
  const itemsStart = items.slice(0, 12);
  const itemsMiddle = items.slice(12, 24);
  const itemsEnd = items.slice(24);

  return (
    <div className={clsx(style.page, className)} {...rest}>
      <a className={style.skipLink} href="#main">
        Skip to main content
      </a>
      <header className={style.header}>
        <Sidebar
          className={clsx(style.headerSidebar, sidebarPropsClassName)}
          {...sidebarProps}
        />
      </header>
      <main className={style.main} id="main">
        {/* BEGIN Header */}

        <div className={clsx(style.pageRow, style.pageSection)}>
          <div className={clsx(style.pageRowItem, style.contentHeaderStats)}>
            <div className={style.contentHeaderStatsWrapper}>
              {header.map(({ count, label, status, value }, index) => (
                <div className={style.contentHeaderStatsItem} key={index}>
                  <div className={style.contentHeaderStatsValueWrapper}>
                    <span
                      className={clsx(
                        style.contentHeaderStatsValue,
                        status === "success" &&
                          style.contentHeaderStatsValueSuccess,
                        status === "info" && style.contentHeaderStatsValueInfo
                      )}
                    >
                      {value}
                    </span>
                    {typeof count !== "undefined" && (
                      <span className={style.contentHeaderStatsBadge}>
                        {count}
                      </span>
                    )}
                  </div>
                  <span className={style.contentHeaderStatsLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <form
            action="/search"
            className={clsx(style.pageRowItem, style.contentHeaderSearchForm)}
            role="search"
          >
            <input
              aria-label="Search"
              className={style.contentHeaderSearchFormInput}
              name="q"
              placeholder="Lorem ipsum…"
            />
            <button
              className={style.contentHeaderSearchFormButton}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        {/* END Header */}

        {/* BEGIN Lead */}

        <div className={clsx(style.lead, style.pageSection)}>
          <h1 className={style.leadTitle}>{lead.title}</h1>
          <p className={style.leadDescription}>{lead.description}</p>
          <Button onClick={lead.actionOnClick} size="large" variant="primary">
            {lead.actionText}
          </Button>
        </div>

        {/* END Lead */}

        <div className={style.pageRow}>
          {itemsStart.map((item, index) => (
            <div
              className={clsx(style.pageRowItem, style.productListItem)}
              key={index}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {advertisements[0] && (
          <PageAdvertisement
            className={style.pageSection}
            {...advertisements[0]}
          />
        )}

        <div className={style.pageRow}>
          {itemsMiddle.map((item, index) => (
            <div
              className={clsx(style.pageRowItem, style.productListItem)}
              key={index}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {advertisements[1] && (
          <PageAdvertisement
            className={style.pageSection}
            {...advertisements[1]}
          />
        )}

        <div className={style.pageRow}>
          {itemsEnd.map((item, index) => (
            <div
              className={clsx(style.pageRowItem, style.productListItem)}
              key={index}
            >
              <PageItem {...item} />
            </div>
          ))}
        </div>

        {/* BEGIN Footer */}

        <div className={style.footer}>
          <div className={clsx(style.pageRow, style.footerMenus)}>
            {footer.menus.map(({ title, links }, index) => (
              <div
                className={clsx(style.pageRowItem, style.footerMenuItem)}
                key={index}
              >
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
