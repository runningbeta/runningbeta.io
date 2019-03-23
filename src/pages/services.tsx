import * as React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

import ContentWithImage from "../components/ContentWithImage/ContentWithImage";
import { ILayoutProps, withLayout } from "../components/Layout";
import Masthead from "../components/Masthead/Masthead";

import ContactForm from "../components/ContactForm/ContactForm";
import Technologies from "../data/technologyStacks";

const ServicesPage = (props: ILayoutProps) => {
  return (
    <div>
      <Masthead
        {...props}
        title="We build products that bring value to the users."
        subtitle="Trust us with your project"
      // buttonLabel="Get started!"
      />
      <Segment vertical={true} className="stripe feature">
        <Container>
          <Grid
            columns="2"
            textAlign="left"
            relaxed={true}
            stackable={true}
            verticalAlign="top"
          >
            <Grid.Row columns="1">
              <Grid.Column>
                <Header id="blockchainFocused" as="h1">
                  Blockchain Focused
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                <p>
                  RunningBeta is focused on building the infrastructure,
                  protocols, and applications in a decentralized world. Our goal
                  is to work on meaningful projects that help create a better
                  future and bring them to life using the best technology
                  available.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/audit.jpeg")})`,
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
                    backgroundImage: `url(${require("../assets/images/stock/blockchain.jpeg")})`,
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
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature alternate">
        <Container>
          <Grid
            columns="2"
            textAlign="left"
            relaxed={true}
            stackable={true}
            verticalAlign="top"
          >
            <Grid.Row columns="1">
              <Grid.Column>
                <Header id="platformAgnostic" as="h1">
                  Platform Agnostic
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                <p>
                  Our team builds platforms that take advantage of emerging
                  technologies, combining them with tried and tested solutions
                  to create the best digital experiences. Trust us with your
                  project.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/website.jpg")})`,
                  }}
                />
                <Header>WEB</Header>
                <p>
                  We bring front-end, back-end and architecture ability together
                  to offer options for businesses who seek to provide a
                  flexible, consistent experience for users across platforms.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/cellphone.jpg")})`,
                  }}
                />
                <Header>MOBILE</Header>
                <p>
                  With experience in the range of development from pure native
                  to cross platform apps, we can help you select the best choice
                  for your project.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature">
        <Container>
          <Grid
            columns="2"
            textAlign="left"
            relaxed={true}
            stackable={true}
            verticalAlign="top"
          >
            <Grid.Row columns="1">
              <Grid.Column>
                <Header id="projectManagement" as="h1">
                  Project Management
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                <p>
                  Define the investment potential, technology stack, timeline,
                  total cost of ownership and the ongoing maintenance required
                  to launch and sustain a solution.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/flow.jpg")})`,
                  }}
                />
                <Header>DEVELOPMENT PROCESS</Header>
                <p>
                  Before beginning re-architecture or new development, we
                  customize consulting engagements to examine your code base,
                  development process, align on current challenge areas and
                  explore how to mitigate risks associated with leveraging
                  existing code.
                </p>
              </Grid.Column>
              <Grid.Column>
                <div
                  className="coverImage"
                  style={{
                    backgroundImage: `url(${require("../assets/images/stock/idea.jpeg")})`,
                  }}
                />
                <Header>SOLUTION DEVELOPMENT</Header>
                <p>
                  Define the investment potential, technology stack, timeline,
                  total cost of ownership and the ongoing maintenance required
                  to launch and sustain a solution. The point is not to build a
                  minimal product, but a product that is already great yet has
                  room to improve.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature alternate">
        <Container>
          <Grid className="technologies" relaxed={true}>
            <Grid.Row>
              <Grid.Column>
                <Header as="h2">Technology Stacks</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid className="technologies" relaxed={true} doubling={true} columns={3}>
            <Grid.Row style={{ marginTop: "2rem" }}>
              {Technologies.map((tech: { header: string; items: string[] }) => (
                <Grid.Column key={tech.header} style={{ marginBottom: "3rem" }}>
                  <List divided={true}>
                    <List.Header>
                      <Header
                        as="h4"
                        style={{
                          marginBottom: "0.75rem",
                          textTransform: "uppercase",
                        }}
                      >
                        {tech.header}
                      </Header>
                    </List.Header>
                    {tech.items.map((item) => (
                      <List.Item key={item}>
                        <p>{item}</p>
                      </List.Item>
                    ))}
                  </List>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <Segment vertical={true} className="stripe feature">
        <Container>
          <Grid
            columns="2"
            textAlign="left"
            relaxed={true}
            stackable={true}
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
                    backgroundImage: `url(${require("../assets/images/stock/brainstorm.jpeg")})`,
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
                    backgroundImage: `url(${require("../assets/images/stock/hourly.jpeg")})`,
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
                    backgroundImage: `url(${require("../assets/images/stock/consulting.jpg")})`,
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
                    backgroundImage: `url(${require("../assets/images/stock/team.jpeg")})`,
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
      <Segment vertical={true} className="stripe feature alternate">
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
      <Segment vertical={true} className="stripe feature">
        <ContentWithImage
          title="Get in touch"
          src={require("../assets/images/stock/contact.jpg")}
          content={<ContactForm />}
        />
      </Segment>
      {/* <Segment vertical className="stripe feature">
        <ContentWithImage
          buttonIcon="chevron right"
          buttonLabel="Apply"
          content={
            <React.Fragment>
              <p>
                RunningBeta was founded in 2017 as a result of our aspiration to
                create a community based on transparent work culture that will
                employ the best professionals in the world.
              </p>
              <p>
                Work from a beach in Thailand, or on top of the Swiss Alps, it's
                up to you.
              </p>
              <p>Interested in joining the RunningBeta team?</p>
            </React.Fragment>
          }
          contentOrientation="image-text"
          src={require("../assets/images/stock/distributed.jpeg")}
          title="Work with us"
        />
      </Segment> */}
    </div>
  );
};

export default withLayout(ServicesPage);
