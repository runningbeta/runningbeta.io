import * as React from "react";
import {
  Header,
  Container,
  Segment,
  Grid,
  Popup,
  Message,
  Image
} from "semantic-ui-react";

import { withLayout, LayoutProps } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";

import ReactIcon from "../assets/images/tech/react.svg";
import TruffleIcon from "../assets/images/tech/truffle.svg";

const ServicesPage = (props: LayoutProps) => {
  return (
    <div>
      <Masthead
        {...props}
        title="We build products that bring value to the users."
        subtitle="Trust us with your project"
        buttonLabel="Get started!"
      />
      <Segment vertical className="stripe">
        <Container>
          <Grid
            columns="3"
            textAlign="left"
            relaxed
            stackable
            verticalAlign="top"
          >
            <Grid.Row columns="1">
              <Grid.Column>
                <Header as="h1">Blockchain Focused</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/audit.jpeg")})`
                  }}
                />
                <Header>CONTRACT AUDITS</Header>
                <p>
                  We have a thorough understanding of how a publicly available
                  system can be vulnerable to attacks. We are familiar with many
                  attack vectors, and how to detect and mitigate
                  vulnerabilities.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/blockchain.jpeg")})`
                  }}
                />
                <Header>BLOCKCHAIN DAPPS</Header>
                <p>
                  The blockchain revolution is happening. Get in touch if you
                  want to join in. We can help you understand and deploy
                  blockchain projects: Ethereum smart contracts, tokens,
                  escrows, oracles, ICOs.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/idea.jpeg")})`
                  }}
                />
                <Header>SOLUTION DEVELOPMENT</Header>
                <p>
                  We can help you develop your idea into a product. The point is
                  not to build a minimal product, but a product that is already
                  great yet has room to improve.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical className="stripe alternate">
        <Container>
          <Header as="h2">Stacks</Header>
          <Message warning size="big">
            <ul>
              <li>Mobile</li>
              <li>Server</li>
              <li>Web</li>
              <li>Product</li>
              <li>Machine Learning</li>
              <li>Blockchain</li>
            </ul>
          </Message>
          <Grid className="technologies" columns={16} doubling />
        </Container>
      </Segment>
      <Segment vertical className="stripe feature">
        <Container>
          <Grid
            columns="2"
            textAlign="left"
            relaxed
            stackable
            verticalAlign="top"
          >
            <Grid.Row columns="1">
              <Grid.Column>
                <Header as="h1">Work with us</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/brainstorm.jpeg")})`
                  }}
                />
                <Message warning size="mini">
                  <ul>
                    <li>price per project</li>
                    <li>well defined</li>
                    <li>can't change</li>
                  </ul>
                </Message>
                <Header as="h2">PROJECT ESTIMATE</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/hourly.jpeg")})`
                  }}
                />
                <Message warning size="mini">
                  <ul>
                    <li>pricing per hour worked</li>
                    <li>suitable for most projects</li>
                    <li>better estimates available as project progresses</li>
                  </ul>
                </Message>
                <Header as="h2">PER HOUR</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/consulting.jpg")})`
                  }}
                />
                <Message warning size="mini">
                  <ul>
                    <li>knowledge transfer</li>
                    <li>pricing determined by complexity</li>
                    <li>working per agreed schedule</li>
                  </ul>
                </Message>
                <Header as="h2">CONSULTING</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/team.jpeg")})`
                  }}
                />
                <Message warning size="mini">
                  <ul>
                    <li>long lasting projects</li>
                    <li>dedicated project manager</li>
                    <li>top talent available</li>
                  </ul>
                </Message>
                <Header as="h2">DEDICATED TEAM</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical className="stripe alternate">
        <ContentWithImage
          title="Idea development"
          src={require("../assets/images/stock/idea_dev.jpeg")}
          content={
            <span>
              <Message className="container" warning size="tiny">
                <ul>
                  <li>secure - NDA presigned</li>
                  <li>technology</li>
                  <li>product application</li>
                </ul>
              </Message>
              Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          }
          contentOrientation="image-text"
          buttonLabel="Start now"
          buttonIcon="chevron right"
        />
      </Segment>
      <Segment vertical className="stripe">
        <ContentWithImage
          title="Get in touch"
          src={require("../assets/images/stock/matterhorn.jpeg")}
          content={
            <div>
              <span>
                Contact RunningBeta today and our experts will customize a
                solution with the best technology, proven strategy and unique
                creativity to create life-long customers and gain market share.
              </span>
              <br />
              <br />
              <span>We look forward to talking soon!</span>
            </div>
          }
          buttonLabel="Conact us"
          buttonIcon="chevron right"
        />
      </Segment>
    </div>
  );
};

export default withLayout(ServicesPage);
