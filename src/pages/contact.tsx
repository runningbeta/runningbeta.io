import React from "react";

import { Container, Header, Segment } from "semantic-ui-react";

import ContactForm from "../components/ContactForm/ContactForm";
import { ILayoutProps, withLayoutInverted } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

const Contact = (props: ILayoutProps) => (
  <div>
    <Masthead
      {...props}
      className="short"
      title="Contact us."
      subtitle=""
    // buttonLabel="Get started!"
    />
    <Segment vertical={true} className="stripe feature">
      <Container>
        <Header as="h1">Fill out the form</Header>
        <ContactForm />
      </Container>
    </Segment>
  </div>
);

export default withLayoutInverted(Contact);
