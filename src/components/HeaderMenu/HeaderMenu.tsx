import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Container, Image, Menu } from "semantic-ui-react";
import { toggleSidebar } from "../../store";
import { IMenuProps } from "../Menu";

import betalightSvg from "../../assets/images/identity/betalight.svg";
// import runningbetanameSvg from "../../assets/images/identity/runningbetaname.svg";

interface IHeaderMenuProps extends IMenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({
  items,
  pathname,
  Link,
  inverted,
  dispatch,
}: IHeaderMenuProps) => {

  const onMenuItemClick = () => dispatch && dispatch(toggleSidebar());

  return (
    <Container>
      <Menu size="large" pointing={true} secondary={true} inverted={inverted}>
        <Menu.Item
          as="a"
          className="mobile only"
          icon="sidebar"
          onClick={onMenuItemClick}
        />
        <Menu.Item style={{ padding: "0 2em 0 0" }} className="mobile hidden">
          <Image size="small" src={betalightSvg} />{" "}
        </Menu.Item>
        {items.map((item) => {
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
};

export default connect()(HeaderMenu);
