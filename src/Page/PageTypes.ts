import React from "react";
import { SidebarProps } from "../Sidebar/SidebarTypes";

export interface PageItemProps extends React.HTMLAttributes<HTMLElement> {
  description: string;
  fulfillment?: string;
  imageAlt: string;
  imageSrc: string;
  price: string;
  title: string;
}

export interface PageProps extends React.HTMLAttributes<HTMLElement> {
  advertisement: {
    actionOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    description: React.ReactNode;
    imageAlt: string;
    imageSrc: string;
    title: React.ReactNode;
  };
  footer: {
    actionOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    finePrint1: React.ReactNode;
    finePrint2: React.ReactNode;
    menus: {
      title: React.ReactNode;
      links: {
        name: string;
        url: string;
      }[];
    }[];
  };
  lead: {
    actionOnClick?: React.MouseEventHandler<HTMLButtonElement>;
    actionText: string;
    description: React.ReactNode;
    title: React.ReactNode;
  };
  items: PageItemProps[];
  sidebarProps: SidebarProps;
}
