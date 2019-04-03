import React from "react";

import { Container, Grid, Header, Segment } from "semantic-ui-react";

import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import { ILayoutProps, withLayoutInverted } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

const Application = (props: ILayoutProps) => (
  <div>
    <Masthead
      {...props}
      className="short"
      title="Apply for a position with RunningBeta."
      subtitle=""
    // buttonLabel="Get started!"
    />
    <Segment
      vertical={true}
      className="stripe feature"
    >
      <Container>
        <Grid relaxed={true} columns="2">
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">
                <Header.Content style={{ marginBottom: "2rem" }}>
                  Get in Touch
                  <Header.Subheader>
                    Please fill out the quick form and we will be in touch as soon as posible.
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <ApplicationForm />
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Manifest</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default withLayoutInverted(Application);
