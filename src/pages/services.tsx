import * as React from "react";
import {
  Header,
  Container,
  Segment,
  Grid,
  List,
  Message
} from "semantic-ui-react";

import { withLayout, LayoutProps } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";

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
          <Grid className="technologies" relaxed>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Technology Stacks</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid className="technologies" relaxed doubling columns={3}>
            <Grid.Row style={{ marginTop: "2rem" }}>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      Blockchain
                    </Header>
                  </List.Header>
                  {[
                    "Ethereum",
                    "Solidity",
                    "Truffle, Ganache",
                    "Parity PoA"
                  ].map(tech => (
                    <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                      <p>{tech}</p>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      Web
                    </Header>
                  </List.Header>
                  {["React", "Vue.js", "Gatsby", "Webpack, Gulp", "SCSS"].map(
                    tech => (
                      <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                        <p>{tech}</p>
                      </List.Item>
                    )
                  )}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      Mobile
                    </Header>
                  </List.Header>
                  {[
                    "Progressive Web Apps",
                    "React Native",
                    "iOS, Swift, Objective-C",
                    "Android, Kotlin, Java"
                  ].map(tech => (
                    <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                      <p>{tech}</p>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      Backend / Cloud
                    </Header>
                  </List.Header>
                  {[
                    ".Net, Java, Node.js",
                    "Firebase, SQL, Contentful",
                    "AWS, Azure"
                  ].map(tech => (
                    <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                      <p>{tech}</p>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      ML
                    </Header>
                  </List.Header>
                  {["Tenzor", "Python", "Matlab"].map(tech => (
                    <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                      <p>{tech}</p>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column>
                <List divided>
                  <List.Header>
                    <Header
                      as="h4"
                      style={{
                        textTransform: "uppercase",
                        marginBottom: "1rem"
                      }}
                    >
                      Product
                    </Header>
                  </List.Header>
                  {["Sketch", "Zeplin", "Illustrator"].map(tech => (
                    <List.Item style={{ color: "#6C6C6C" }} key={tech}>
                      <p>{tech}</p>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
                <Header as="h2">PROJECT ESTIMATE</Header>
                <p>
                  Estimating is a critical part of project planning, involving a
                  quantitative estimate of project costs, resources or duration.
                </p>
                <p>
                  This method is usually used for a project of smaller scope,
                  that can be properly and accurately estimated, where little to
                  no change is expected in terms of features and the overall
                  scope of the project.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/hourly.jpeg")})`
                  }}
                />
                <Header as="h2">PER HOUR / PER DAY</Header>
                <p>
                  For sizable projects, it becomes very tricky to accurately
                  gauge a realistic project estimate. With daily or hourly
                  pricing, the focus is on the results. This pricing option is
                  suitable for most projects.
                </p>
                <p>
                  Without spending too much time on defining the scope of all
                  the features that will be built, we can start work much
                  sooner. As project progresses, the estimates will become more
                  precise.
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
                <Header as="h2">CONSULTING</Header>
                <p>
                  By offering professional consulting services we will help you
                  devise and implement solutions for your unique business needs.
                </p>
                <p>
                  During the cunsultancy process, we will do our utmost to be
                  flexible and available while respecting your business and
                  organizational context.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/team.jpeg")})`
                  }}
                />
                <Header as="h2">DEDICATED TEAM</Header>
                <p>
                  This model enables you to have a team of people who work
                  full-time on your project. It's perfect if you have long-term
                  project.
                </p>
                <p>
                  We can offer you top talent developers, designers and other
                  professionals. Projects can also have dedicated project
                  managers.
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
            <React.Fragment>
              <p>
                To create and bring to market innovative ideas, entrepreneurs
                can approach us for idea development sessions.
              </p>
              <p>
                In these sessions, we revise strategies and products, or simply
                elevate our partner's knowledge of blockchain technologies,
                markets, and constraints.
              </p>
              <p>The process is secured from the start by a NDA agreement.</p>
            </React.Fragment>
          }
          contentOrientation="image-text"
          buttonLabel="Start now"
          buttonIcon="chevron right"
        />
      </Segment>
      <Segment vertical className="stripe">
        <ContentWithImage
          title="Get in touch"
          src={require("../assets/images/stock/contact.jpg")}
          content={
            <React.Fragment>
              <p>
                <span>
                  Contact RunningBeta today and our experts will customize a
                  solution with the best technology, proven strategy and unique
                  creativity to create life-long customers and gain market
                  share.
                </span>
              </p>
              <p>
                <span>We look forward to talking soon!</span>
              </p>
            </React.Fragment>
          }
          buttonLabel="Conact us"
          buttonIcon="chevron right"
        />
      </Segment>
    </div>
  );
};

export default withLayout(ServicesPage);
