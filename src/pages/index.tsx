import * as React from "react";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import { Link } from "gatsby";
import { Segment, Container, Grid, Header } from "semantic-ui-react";
import Masthead from "../components/Masthead/Masthead";
import Title from "../components/Title/Title";
import ContactForm from "../components/ContactForm/ContactForm";

import Audit from "../assets/images/icons/audit.svg";
import Chain from "../assets/images/icons/chain.svg";
import Idea from "../assets/images/icons/idea.svg";

import Tolar from "../assets/images/partners/tolar";
import Rimac from "../assets/images/partners/rimac";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";

const IndexPage = (props: LayoutProps) => (
  <div>
    <Masthead
      {...props}
      title="Distributed team building unstoppable applications that run on open
      standards."
      subtitle="RunningBeta"
      buttonLabel="Work with us"
      buttonSize="huge"
      buttonIcon="chevron right"
    />
    {process.env.GATSBY_SHOW_PARTNERS && (
      <Segment vertical className="stripe feature">
        <Container>
          <Grid centered stackable doubling columns="3">
            <Grid.Row>
              <Grid.Column>
                <div className="partnerLogo">
                  <Tolar />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="partnerLogo">
                  <Rimac />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="partnerLogo">
                  <Tolar />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div className="partnerLogo">
                  <Tolar />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="partnerLogo">
                  <Tolar />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="partnerLogo">
                  <Tolar />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )}
    <Segment vertical className="stripe feature">
      <Container>
        <ContentWithImage
          content={
            <div>
              <p>
                A powerfull fundrasing platform for your payment, utility or
                asset tokens.
              </p>
            </div>
          }
          src={require("../assets/images/stock/crowdsale.png")}
          title="Weinorth"
        />
      </Container>
    </Segment>
    <Segment vertical className="stripe feature alternate">
      <Container>
        <ContentWithImage
          content={
            <div>
              <p>
                A powerfull fundrasing platform for your payment, utility or
                asset tokens.
              </p>
            </div>
          }
          src={require("../assets/images/stock/crowdsale.png")}
          title="R8.escrow"
        />
      </Container>
    </Segment>
    <Segment vertical className="stripe feature">
      <Container>
        <ContentWithImage
          content={
            <div>
              <p>
                A powerfull fundrasing platform for your payment, utility or
                asset tokens.
              </p>
            </div>
          }
          src={require("../assets/images/stock/crowdsale.png")}
          title="Tolar"
        />
      </Container>
    </Segment>
    <Segment vertical className="stripe feature alternate">
      <Container>
        <Header as="h2">Services ... learn more</Header>
      </Container>
    </Segment>
    <Segment vertical className="stripe feature">
      <Grid container relaxed stackable verticalAlign="top">
        <Grid.Row>
          <Grid.Column width="8">
            <Header as="h2">Contact Us</Header>
            <ContactForm />
          </Grid.Column>
          <Grid.Column width="8">
            <Header as="h2" style={{ marginBottom: "2rem" }}>
              Ask RunningBeta how we can help you:
            </Header>
            <ul>
              <li style={{ margin: "1.5rem 0" }}>
                <p>
                  Interested in seeing our products in action? Request a product
                  demonstration and discover how we can help your company grow.
                </p>
              </li>
              <li style={{ margin: "1.5rem 0" }}>
                <p>
                  Reach out to sales team directly for immediate assistance with
                  all sales related inquiries.
                </p>
              </li>
              <li style={{ margin: "1.5rem 0" }}>
                <p>
                  If you are interested in joining the RunningBeta team check
                  the <Link to="/careers/">careers page</Link>.
                </p>
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical className="stripe feature alternate">
      <Container>
        <Header as="h2">Vision ... learn more</Header>
      </Container>
    </Segment>
    <Segment vertical className="stripe feature">
      <Container>
        <Header as="h2">Work with us ... learn more</Header>
      </Container>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
