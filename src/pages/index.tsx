import { Link } from "gatsby";
import GatsbyLink from "gatsby-link";
import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Responsive,
  Segment,
} from "semantic-ui-react";
import ContactForm from "../components/ContactForm/ContactForm";
import { ILayoutProps, withLayout } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

import Rimac from "../assets/images/partners/rimac";
import Tolar from "../assets/images/partners/tolar";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";

const IndexPage = (props: ILayoutProps) => (
  <div>
    <Masthead
      {...props}
      subtitle="RunningBeta"
      title="Distributed team building unstoppable applications that run on open standards."
    />
    {process.env.GATSBY_SHOW_PARTNERS && (
      <Segment vertical={true} className="stripe feature">
        <Container>
          <Grid centered={true} stackable={true} doubling={true} columns="3">
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

    <Segment vertical={true} className="stripe feature">
      <Container>
        <Header className="title" as="h1">
          Distributed trust
        </Header>
        <p>
          RunningBeta was founded in 2017 as a result of our aspiration to
          create a community based on transparent work culture that will employ
          the best professionals in the world. Our goal is to work on meaningful
          projects that help create a better future and bring them to life using
          the best technology available.
          <GatsbyLink to="/vision/"> Read more about our goals.</GatsbyLink>
        </p>
      </Container>
    </Segment>
    <Segment
      style={{ paddingBottom: "4rem", border: "none" }}
      vertical={true}
      className="stripe feature alternate2"
    >
      <Container>
        <Header className="title" as="h1">
          Our Work
        </Header>
        <ContentWithImage
          buttonIcon="chevron right"
          buttonLabel="Request demo"
          content={
            <div>
              <p>
                A powerfull fundrasing platform for your payment, utility or
                asset tokens. WΞINORTH is currently rolling out with a selected
                batch of partners.
              </p>
              <p>
                Request a demo and our experts will show you how WΞINORTH can
                empower your project as your fundrasing platform.
              </p>
            </div>
          }
          opacity={1}
          secondary={true}
          // src={require("../assets/images/stock/crowdsale.png")}
          title="Weinorth"
        />
      </Container>
    </Segment>
    <Segment
      style={{ padding: "4rem 0", border: "none" }}
      vertical={true}
      className="stripe feature alternate2"
    >
      <Container>
        <ContentWithImage
          buttonIcon="chevron right"
          buttonLabel="Try it now"
          content={
            <div>
              <p>
                R8.Escrow is a smart contract escrow service that secures
                payments and provides arbitrage services.
              </p>
              <p>
                Utilizing kyber.network and Ethereum smart contracts, the
                R8.Escrow service will hold the funds until both parties agree
                that the conditions are met. If there is a need for conflict
                resolution, a predetermined arbiteer will review the contract
                and resolve the escrow for a fee.
              </p>
            </div>
          }
          opacity={1}
          secondary={true}
          // src={require("../assets/images/stock/escrow.jpg")}
          title="R8.Escrow"
        />
      </Container>
    </Segment>
    <Segment
      style={{ padding: "4rem 0 8rem" }}
      vertical={true}
      className="stripe feature alternate2"
    >
      <Container>
        <ContentWithImage
          content={
            <div>
              <p>
                Tolar is a community governed crypto-currency featuring
                scalable, fast, secure, and fair transactions. Fast, fair and
                open source currency for next-gen transactions.
              </p>
              <p>
                ICO has ended on September 20, 2018. The total amount raised
                during the private sale, presale and ICO is 28,807.01 ETH.
                Tokens were distributed on September 30, 2018.
              </p>
            </div>
          }
          opacity={1}
          src={require("../assets/images/stock/tolar.jpeg")}
          title="Tolar"
        />
      </Container>
    </Segment>
    <Segment>
      <Container>
        <ContentWithImage
          content={
            <div>
              <p>
                Kittyland
              </p>
            </div>
          }
          opacity={1}
          title="Kittyland"
        />
      </Container>
    </Segment>
    <Segment vertical={true} className="stripe feature">
      <Container>
        <Header className="title" as="h1">
          Services
        </Header>
        <Grid
          className="tablet one column computer three column grid"
          stackable={true}
          relaxed={true}
          centered={true}
        >
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">BLOCKCHAIN FOCUSED</Header>
              <p>
                RunningBeta is focused on building the infrastructure,
                protocols, and applications in a decentralized world. Our goal
                is to work on meaningful projects that help create a better
                future and bring them to life using the best technology
                available.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">PLATFORM AGNOSTIC</Header>
              <p>
                Our team builds platforms that take advantage of emerging
                technologies, combining them with tried and tested solutions to
                create the best digital experiences. Trust us with your project
                that runs on the Web, mobile or both.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">PROJECT MANAGEMENT</Header>
              <p>
                Before beginning ideation process or new development, we
                customize consulting engagements to examine your idea, plans,
                code base, align on current challenge areas and explore how to
                mitigate risks associated with leveraging existing code.
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Button secondary={true} as={GatsbyLink} to="/services/">
                Learn more
                <Icon name="chevron right" />
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment vertical={true} className="stripe feature alternate2">
      <Container>
        <Header className="title" as="h1">
          Contact us
        </Header>
        <Grid relaxed={true} stackable={true} verticalAlign="top">
          <Grid.Row columns={2}>
            <Responsive as={Grid.Column} {...Responsive.onlyMobile}>
              <Header as="h2" style={{ marginBottom: "2rem" }}>
                Ask RunningBeta how we can help you:
              </Header>
              <ul>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    Interested in seeing our products in action? Request a
                    product demonstration and discover how we can help your
                    company grow.
                  </p>
                </li>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    Reach out to sales team directly for immediate assistance
                    with all sales related inquiries.
                  </p>
                </li>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    If you are interested in joining the RunningBeta team check
                    the <Link to="/careers/">careers page</Link>.
                  </p>
                </li>
              </ul>
            </Responsive>
            <Grid.Column>
              <ContactForm />
            </Grid.Column>
            <Responsive
              as={Grid.Column}
              {...Responsive.onlyTablet.minWidth}
              {...Responsive.onlyLargeScreen.maxWidth}
            >
              <Header as="h2" style={{ marginBottom: "2rem" }}>
                Ask RunningBeta how we can help you:
              </Header>
              <ul>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    Interested in seeing our products in action? Request a
                    product demonstration and discover how we can help your
                    company grow.
                  </p>
                </li>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    Reach out to sales team directly for immediate assistance
                    with all sales related inquiries.
                  </p>
                </li>
                <li style={{ margin: "1.5rem 0" }}>
                  <p>
                    If you are interested in joining the RunningBeta team check
                    the <Link to="/careers/">careers page</Link>.
                  </p>
                </li>
              </ul>
            </Responsive>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment vertical={true} className="stripe feature">
      <Container>
        <Header className="title" as="h1">
          Join us
        </Header>
        <p>
          Having a remote team opens up the possibility of drawing from
          broadest, most deverse talent pool available instead of just what's
          available localy.
        </p>
        <p>
          Join a remote team of passionate professionals who create great
          products every day.
          <GatsbyLink to="/careers/"> Explore open positions. </GatsbyLink>
          Working remotely allows you to be there for the ones you love, and be
          more available for them. It allows you to see more places, without
          ever having to commute. On top of that, working remotely removes
          almost every distraction.
        </p>
        <Button color="black" as={GatsbyLink} to="/application/">
          Apply for position
          <Icon name="chevron right" />
        </Button>
      </Container>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
