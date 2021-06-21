import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { SidebarProps } from "../Sidebar/SidebarTypes";

export interface PageItemProps extends HTMLAttributes<HTMLElement> {
  description: string;
  fulfillment?: string;
  imageAlt: string;
  imageSrc: string;
  price: string;
  title: string;
}

export interface PageProps extends HTMLAttributes<HTMLElement> {
  advertisement: {
    actionOnClick?: MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    description: ReactNode;
    imageAlt: string;
    imageSrc: string;
    title: ReactNode;
  };
  footer: {
    actionOnClick?: MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    finePrint1: ReactNode;
    finePrint2: ReactNode;
    menus: {
      title: ReactNode;
      links: {
        name: string;
        url: string;
      }[];
    }[];
  };
  lead: {
    actionOnClick?: MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    description: ReactNode;
    title: ReactNode;
  };
  items: PageItemProps[];
  sidebarProps: SidebarProps;
}
