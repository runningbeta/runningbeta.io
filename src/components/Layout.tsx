import { Link } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import {
  Grid,
  Image,
  Segment,
  Icon,
  Container,
  Sidebar
} from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "../css/styles.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

import RBInverted from "../assets/images/identity/betalight.svg";

export const menuItems = [
  {
    name: "Home",
    path: "/",
    exact: true,
    icon: "home",
    inverted: true,
    hideMenu: true
  },
  {
    name: "What we do",
    path: "/services/",
    exact: true,
    icon: "laptop",
    inverted: true,
    hideMenu: true
  },
  {
    name: "Our goals",
    path: "/vision/",
    exact: true,
    icon: "building",
    inverted: true,
    hideMenu: true
  },
  {
    name: "Opportunities",
    path: "/careers/",
    exact: true,
    icon: "briefcase",
    inverted: true,
    hideMenu: true
  },
  {
    name: "About",
    path: "/about/",
    exact: true,
    icon: "info circle",
    inverted: true,
    hideMenu: true
  }
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  // const isHome = pathname === "/";
  const currentMenuItem = menuItems.find(v => v.path === pathname);
  const hideMenu = (currentMenuItem && currentMenuItem.hideMenu) || false;

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
          <Segment inverted vertical>
            <Container style={{ paddingTop: 20 }} textAlign="center">
              <Image src={RBInverted} size="small" />
              <p style={{ marginTop: "1em" }}>
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
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
