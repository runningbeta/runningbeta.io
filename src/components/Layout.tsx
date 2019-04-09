// tslint:disable max-classes-per-file
import { Link } from "gatsby";
// tslint:disable-next-line no-submodule-imports no-implicit-dependencies
import "prismjs/themes/prism-okaidia.css";
import * as React from "react";
import { Provider } from "react-redux";
import {
  Container,
  Icon,
  Image,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "../css/styles.css";
import { store } from "../store";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

import RBInverted from "../assets/images/identity/betalight.svg";

export const menuItems = [
  {
    exact: true,
    hideMenu: true,
    icon: "home",
    inverted: true,
    name: "Home",
    path: "/",
  },
  {
    exact: true,
    hideMenu: true,
    icon: "building",
    inverted: true,
    name: "Our vision",
    path: "/vision/",
  },
  {
    exact: true,
    hideMenu: true,
    icon: "laptop",
    inverted: true,
    name: "What we do",
    path: "/services/",
  },
  {
    exact: true,
    hideMenu: true,
    icon: "briefcase",
    inverted: true,
    name: "Opportunities",
    path: "/careers/",
  },
  {
    exact: true,
    hideMenu: true,
    icon: "info circle",
    inverted: true,
    name: "About",
    path: "/about/",
  },
];

export interface ILayoutProps {
  children: any;
  hideMenu?: boolean;
  location: {
    pathname: string;
    state: any;
  };
}

const Layout = (props: ILayoutProps) => {
  const { pathname } = props.location;
  // const isHome = pathname === "/";
  const currentMenuItem = menuItems.find((v) => v.path === pathname);
  const hideMenu = (currentMenuItem && currentMenuItem.hideMenu) || props.hideMenu || false;

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
          visible={false}
        />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {hideMenu ? null : (
            <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
          )}

          {/* Render children pages */}
          <div style={{ paddingBottom: 80 }}>{props.children}</div>

          {/* Footer */}
          <Segment inverted={true} vertical={true}>
            <Container style={{ paddingTop: 20 }} textAlign="center">
              <Image src={RBInverted} size="small" />
              <p style={{ marginTop: "1em", color: "white" }}>
                <Icon name="copyright" /> RunningBeta 2018
              </p>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithLayout extends React.Component<P & ILayoutProps> {
    public render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };

export const withLayoutInverted = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) =>
  class WithLayoutInverted extends React.Component<P & ILayoutProps> {
    public render() {
      return (
        <Layout hideMenu={true} location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
