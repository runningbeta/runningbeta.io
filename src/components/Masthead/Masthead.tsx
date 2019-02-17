import * as React from "react";
import { Link } from "gatsby";
import {
  Button,
  Header,
  Container,
  Segment,
  Icon,
  SemanticSIZES,
  SemanticTEXTALIGNMENTS,
  SemanticICONS
} from "semantic-ui-react";
import { LayoutProps, menuItems } from "../Layout";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { MenuItem } from "../Menu";

interface MastheadProps extends LayoutProps {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonSize?: SemanticSIZES;
  buttonIcon?: SemanticICONS;
  textAlign?: SemanticTEXTALIGNMENTS;
}

export const Masthead = (props: MastheadProps) => {
  return (
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text textAlign={props.textAlign || "left"}>
        <Header inverted as="h1">
          {props.title}
        </Header>
        <Header inverted as="h2">
          {props.subtitle}
        </Header>
        {props.buttonLabel && (
          <Button basic inverted size={props.buttonSize || "large"}>
            {props.buttonLabel}
            {props.buttonIcon && <Icon name={props.buttonIcon} />}
          </Button>
        )}
      </Container>
    </Segment>
  );
};

export default Masthead;
