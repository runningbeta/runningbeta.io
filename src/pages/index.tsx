import * as React from "react";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import { Segment, Container, Image, Grid, Message } from "semantic-ui-react";
import Masthead from "../components/Masthead/Masthead";
import Title from "../components/Title/Title";

import Audit from "../assets/images/icons/audit.svg";
import Chain from "../assets/images/icons/chain.svg";
import Idea from "../assets/images/icons/idea.svg";

import Tolar from "../assets/images/partners/tolar";
import Rimac from "../assets/images/partners/rimac";

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
    <Segment vertical className="stripe alternate">
      <Grid
        container
        columns="3"
        textAlign="left"
        relaxed
        stackable
        verticalAlign="top"
      >
        <Grid.Row columns="1">
          <Grid.Column>
            <h1>Blockchain Focused</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Title title="CONTRACT AUDITS" imageSize="tiny" src={Audit} />
            <p>
              We have a thorough understanding of how a publicly available
              system can be vulnerable to attacks. We are familiar with many
              attack vectors, and how to detect and mitigate vulnerabilities.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Title title="BLOCKCHAIN DAPPS" imageSize="tiny" src={Chain} />
            <p>
              The blockchain revolution is happening. Get in touch if you want
              to join in. We can help you understand and deploy blockchain
              projects: Ethereum smart contracts, tokens, escrows, oracles,
              ICOs.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Title title="SOLUTION DEVELOPMENT" imageSize="tiny" src={Idea} />
            <p>
              We can help you develop your idea into a product. The point is not
              to build a minimal product, but a product that is already great
              yet has room to improve.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    {/* <Segment vertical className="stripe alternate feature">
      <Grid container columns="3" textAlign="center" divided relaxed stackable>
        <Grid.Row>
          <Grid.Column className="container">
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
          <Grid.Column className="container">
            <Header icon>
              <Icon name="wizard" />A kind of magic!
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              eaque at quae cupiditate aspernatur quibusdam! Distinctio quod
              non, harum dolorum earum molestias, beatae expedita aliquam
              dolorem asperiores nemo amet quaerat.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
  </div>
);

export default withLayout(IndexPage);
