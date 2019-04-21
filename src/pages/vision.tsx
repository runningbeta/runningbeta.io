import GatsbyLink from "gatsby-link";
import * as React from "react";
import { Button, Container, Grid, Header, Icon, Segment } from "semantic-ui-react";

import { ILayoutProps, withLayout } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

// import Title from "../components/Title/Title";

const VisionPage = (props: ILayoutProps) => {
  return (
    <div>
      <Masthead
        {...props}
        title="Distributed trust"
        subtitle="RunningBeta was founded in 2017 as a result of our aspiration to
        create a community based on transparent work culture that will
        employ the best professionals in the world. Our goal is to work on
        meaningful projects that help create a better future and bring them
        to life using the best technology available."
        // buttonLabel="Learn more"
      />
      <Segment vertical={true} className="stripe feature">
        <Container>
          <Header className="title" as="h1">Our Vision</Header>
          <p className="emphasis">
            To help build a world that runs on trustless protocols,
            distributed infrastructure and open source applications.
          </p>
          <p>
            The vision statement emphasizes the business organization's main
            aim of being a part of the decentralized revolution. We believe that
            the best future for our society is not the one where we rely on
            trust, but one where trustless interactions and protocols are a driving
            force of our social and business interactions.
          </p>
          <Header className="title" as="h1">Our Mission</Header>
          <p className="emphasis">
            Our goal is to work on meaningful projects that help create a
            better future and bring them to life using the best technology
            available.
          </p>
          <p>
          This organization's goal promises best development services to
          satisfy target customers’ needs. The company focuses on project's
          value and meaning. In this regard, the following characteristics
          are identifiable in RunningBeta’s mission statement:
          <ul>
            <li>Work on projects that will advance onset of crypto technologies</li>
            <li>Create products that will bring value to the end user</li>
            <li>Use effective and sustainable development practicies</li>
            <li>Utilize both modern and established technologies</li>
          </ul>
          </p>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature alternate">
        <Container>
          <Header className="title" as="h1">Why Blockchain</Header>
          <p>
            Ethereum gives you the power to trust. It enables the development of
            systems of automated and executable agreements that ensure that all
            counterparties are treated fairly throughout a transaction. Any
            system that is currently centralized can be decentralized using
            Ethereum.
          </p>
          <Header
            as="h2"
            style={{ marginTop: "2em", textTransform: "uppercase" }}
          >
            CODIFIED TRUST
          </Header>
          <p>
            On the Ethereum blockchain, a smart contract is immutable and
            trustless. The contract is not a person or a company with a hidden
            agenda or uncertain motivations. The contract runs exactly as
            programmed. If developed correctly, it cannot be manipulated or
            corrupted. Since Ethereum tracks every transaction non-repudiable on
            the blockchain, there is always a trusted record.
          </p>
          <p>
            In an uncertaint market, Ethereum gives you the freedom to conduct
            your business trustlessly.
          </p>
          <Grid
            style={{ marginTop: "2.5em" }}
            columns="3"
            textAlign="left"
            relaxed={true}
            stackable={true}
            verticalAlign="top"
          >
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/secure.jpg")})`,
                  }}
                />
                <Header>SECURITY</Header>
                <p>
                  Ethereum applications can run without fear of downtime, fraud,
                  third-party interference, tampering of data, or censorship by
                  a centralized authority.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    // tslint:disable: max-line-length
                    backgroundImage: `url(${require("../assets/images/stock/fraud-protection.jpg")})`,
                  }}
                />
                <Header>FRAUD PROTECTION</Header>
                <p>
                  The Ethereum blockchain can provide better protection against
                  fraud, remove reliance on paper contracts, and spur greater
                  investment through easy property ownership and transfer.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/fast.jpg")})`,
                  }}
                />
                <Header>LIGHTNING-FAST PAYMENTS</Header>
                <p>
                  The Ethereum blockchain allows smart contracts to
                  automatically execute payments without middlemen and comes to
                  a consensus every 15 seconds.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature container">
        <Header className="title" as="h1">Remote First</Header>
        <p>
          We are a remote first company. We don’t have a central office, and most of
          our communication occurs in GitHub, Slack, video calls, and email.
        </p>
        <p>
          Working remotely allows for a flexible work schedule. A remote only company
          encourages everyone to focus on their value-added instead of hours worked
          because value-added is more visible than long hours in a remote setting.
        </p>
      </Segment>
    <Segment
      style={{ paddingTop: 0 }}
      vertical={true}
      className="stripe feature"
    >
      <Container textAlign="right">
        <Button
          basic={true}
          size="huge"
          color="grey"
          as={GatsbyLink}
          to="/services/"
        >
          What we do
          <Icon name="chevron right" />
        </Button>
      </Container>
    </Segment>
    </div>
  );
};

export default withLayout(VisionPage);
