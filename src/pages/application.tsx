import React from "react";

import { Container, Header, Segment } from "semantic-ui-react";

import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import { ILayoutProps, withLayoutInverted } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

const Application = (props: ILayoutProps) => (
  <div>
    <Masthead
      {...props}
      title="Apply for a position with RunningBeta."
      subtitle=""
    // buttonLabel="Get started!"
    />
    <Segment vertical={true} className="stripe feature">
      <Container>
        <Header as="h1">Fill out the form</Header>
        <ApplicationForm />
      </Container>
    </Segment>
  </div>
);

export default withLayoutInverted(Application);
