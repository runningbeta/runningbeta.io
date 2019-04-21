import * as React from "react";

import { Container, Grid, Header, Responsive, Segment } from "semantic-ui-react";

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
        <Grid columns={2} relaxed={true} doubling={true} stackable={true} verticalAlign="top">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as="h1" className="title">
                <Header.Content>
                  Work at RunningBeta
                  <Header.Subheader>
                    Please fill out the application form and we will be in touch as soon as posible.
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Responsive
              as={Grid.Column}
              maxWidth={Responsive.onlyTablet.maxWidth}
            >
              <Header as="h2">Manifest</Header>
              <p>wth</p>
            </Responsive>
            <Grid.Column>
              <ApplicationForm
                position={props.location.state && props.location.state.position || ""}
              />
            </Grid.Column>
            <Responsive
              as={Grid.Column}
              minWidth={Responsive.onlyComputer.minWidth}
            >
              <Header as="h2">Manifest</Header>
              <p>wth</p>
            </Responsive>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default withLayoutInverted(Application);
