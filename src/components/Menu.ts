import { GatsbyLinkProps } from "gatsby-link";
import * as React from "react";

export interface IMenuItem {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
}

export interface IMenuProps extends React.HTMLProps<HTMLDivElement> {
  items: IMenuItem[];
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>> | any;
}
