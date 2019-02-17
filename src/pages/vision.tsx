import * as React from "react";
import Masthead from "../components/Masthead/Masthead";
import { withLayout, LayoutProps } from "../components/Layout";
import { Header, Container, Segment, Grid } from "semantic-ui-react";

import Title from "../components/Title/Title";

import Secure from "../assets/images/icons/secure.svg";
import Protect from "../assets/images/icons/protect.svg";
import Payments from "../assets/images/icons/payments.svg";

const VisionPage = (props: LayoutProps) => {
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
        buttonLabel="Learn more"
      />
      <Segment vertical className="stripe feature">
        <Container>Intro to our mission and goals</Container>
      </Segment>
      <Segment vertical className="stripe alternate feature">
        <Container>
          <Header as="h1">Why Ethereum</Header>
          <p style={{ color: "#6C6C6C" }}>
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
          <p style={{ color: "#6C6C6C" }}>
            On the Ethereum blockchain, a smart contract is immutable and
            trustless. The contract is not a person or a company with a hidden
            agenda or uncertain motivations. The contract runs exactly as
            programmed. If developed correctly, it cannot be manipulated or
            corrupted. Since Ethereum tracks every transaction non-repudiable on
            the blockchain, there is always a trusted record.
          </p>
          <p style={{ color: "#6C6C6C" }}>
            In an uncertaint market, Ethereum gives you the freedom to conduct
            your business trustlessly.
          </p>
          <Grid
            style={{ marginTop: "2.5em" }}
            columns="3"
            textAlign="left"
            relaxed
            stackable
            verticalAlign="top"
          >
            <Grid.Row>
              <Grid.Column>
                <Title title="SECURITY" imageSize="tiny" src={Secure} />
                <p style={{ color: "#6C6C6C" }}>
                  Ethereum applications can run without fear of downtime, fraud,
                  third-party interference, tampering of data, or censorship by
                  a centralized authority.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Title
                  title="FRAUD PROTECTION"
                  imageSize="tiny"
                  src={Protect}
                />
                <p style={{ color: "#6C6C6C" }}>
                  The Ethereum blockchain can provide better protection against
                  fraud, remove reliance on paper contracts, and spur greater
                  investment through easy property ownership and transfer.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Title
                  title="LIGHTNING-FAST PAYMENTS"
                  imageSize="tiny"
                  src={Payments}
                />
                <p style={{ color: "#6C6C6C" }}>
                  The Ethereum blockchain allows smart contracts to
                  automatically execute payments without middlemen and comes to
                  a consensus every 15 seconds.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical className="stripe feature container">
        Section 2
      </Segment>
    </div>
  );
};

export default withLayout(VisionPage);
