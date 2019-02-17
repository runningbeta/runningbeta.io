import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Image, Label, Menu, Icon } from "semantic-ui-react";
import { MenuProps } from "../Menu";

import RBname from "../../assets/images/identity/runningbetaname.svg";
import RBlogo from "../../assets/images/identity/betalight.svg";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({
  items,
  pathname,
  Link,
  inverted,
  dispatch
}: HeaderMenuProps) => (
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item
        as="a"
        className="mobile only"
        icon="sidebar"
        onClick={() => dispatch && dispatch(toggleSidebar())}
      />
      <Menu.Item style={{ padding: "0 2em 0 0" }} className="mobile hidden">
        <Image size="small" src={RBlogo} />{" "}
      </Menu.Item>
      {items.map(item => {
        const active = item.exact
          ? pathname === item.path
          : pathname.startsWith(item.path);
        return (
          <Menu.Item
            style={{ marginBottom: "0.90em" }}
            as={Link}
            className="mobile hidden"
            name={item.name}
            to={item.path}
            key={item.path}
            active={active}
          />
        );
      })}
    </Menu>
  </Container>
);

export default connect()(HeaderMenu);
