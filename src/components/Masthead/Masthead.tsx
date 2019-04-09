import { Link } from "gatsby";
import GatsbyLink from "gatsby-link";
import * as React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  SemanticICONS,
  SemanticSIZES,
  SemanticTEXTALIGNMENTS,
} from "semantic-ui-react";

import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { ILayoutProps, menuItems } from "../Layout";

interface IMastheadProps extends ILayoutProps {
  buttonIcon?: SemanticICONS;
  buttonLabel?: string;
  buttonSize?: SemanticSIZES;
  buttonTo?: string;
  className?: string;
  subtitle: string;
  textAlign?: SemanticTEXTALIGNMENTS;
  title: string;
}

export const Masthead = (props: IMastheadProps) => {
  const {
    buttonIcon,
    buttonLabel,
    buttonSize,
    buttonTo,
    className,
    location,
    subtitle,
    textAlign,
    title,
  } = props;

  return (
    <Segment
      className={`masthead ${className}`}
      inverted={true}
      textAlign="center"
      vertical={true}
    >
      <HeaderMenu
        Link={Link}
        pathname={location.pathname}
        items={menuItems}
        inverted={true}
      />
      <Container text={true} textAlign={textAlign || "left"}>
        <Header inverted={true} as="h1">
          {title}
        </Header>
        <Header inverted={true} as="h2">
          {subtitle}
        </Header>
        {buttonLabel && (
          <Button
            as={GatsbyLink}
            basic={true}
            inverted={true}
            size={buttonSize || "large"}
            to={buttonTo}
          >
            {buttonLabel}
            {buttonIcon && <Icon name={buttonIcon} />}
          </Button>
        )}
      </Container>
    </Segment>
  );
};

export default Masthead;
