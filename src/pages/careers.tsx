import React, { Component } from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import {
  Accordion,
  Card,
  Container,
  Header,
  Icon,
  Image,
  List,
  Message,
  Grid,
  Segment
} from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

import Masthead from "../components/Masthead/Masthead";
import ContentWithImage from "../components/ContentWithImage/ContentWithImage";

const BookList = (props: any) => (
  <div>
    <Card.Group itemsPerRow="5" doubling>
      {props.books.map((book: any) => (
        <Card as="a" href="/">
          {book.cover && <Image src={book.cover} />}
          <Card.Content>
            <Card.Header>{book.name}</Card.Header>
            <Card.Description>
              <List>
                {book.author.map((a: string) => (
                  <List.Item>{a}</List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

const opportunities = [
  {
    label: "Machine Learning & DSP",
    icon: "server",
    image: require("../assets/images/stock/machine_learning.jpeg")
  },
  {
    label: "Blockchain",
    icon: "key",
    image: require("../assets/images/stock/blocks.jpeg")
  },
  {
    label: "SW Engineering",
    icon: "cogs",
    image: require("../assets/images/stock/computer.jpeg")
  },
  {
    label: "Internship",
    icon: "graduation cap",
    image: require("../assets/images/stock/graduation.jpeg")
  }
];

const books = [
  {
    name: "Mastering Bitcoin",
    author: ["Andreas Antonopoulos"],
    cover: require("../assets/images/books/mastering_bitcoin.jpeg")
  },
  {
    name: "Mastering Ethereum",
    author: ["Andreas Antonopoulos", "Gavin Wood Ph.D."],
    cover: require("../assets/images/books/mastering_ethereum.jpeg")
  },
  {
    name: "Third book",
    author: ["Third author"]
    // cover: require("../assets/images/books/mastering_bitcoin.jpeg")
  }
];
class CareersPage extends Component<LayoutProps> {
  state = { activeIndex: 0 };

  handleClick = (e: React.MouseEvent<HTMLElement>, titleProps: any) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Masthead
          {...this.props}
          title="Careers"
          subtitle="RunningBeta was founded in 2017 as a result of our aspiration to create a community based on transparent work culture that will employ the best professionals in the world. Our goal is to work on meaningful projects that help create a better future and bring them to life using the best technologies available."
          buttonLabel="Start your application"
          buttonIcon="chevron right"
        />
        <Segment vertical className="stripe">
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h1">We are Distributed</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div
                    style={{
                      opacity: 0.7,
                      height: "15rem",
                      width: "100%",
                      backgroundImage: `url(${require("../assets/images/stock/distributed.jpeg")})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center"
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns="2">
                <Grid.Column>
                  <Header as="h2">1. Work from anywhere you want</Header>
                  <p>
                    Working remotely allows you to be there for the ones you
                    love, and be more available for them. It allows you to see
                    more places, without ever having to commute. On top of that,
                    working remotely removes almost every distraction.
                  </p>
                  <Header as="h2">2. Communicate Asynchronously</Header>
                  <p>
                    Don't try to mimic an office. Communicate using issue
                    mentions and chat tools. Reduce task switching and put an
                    end to email overload. Choose the right channel of
                    communication according to the necessity of the task you're
                    working on. Can it wait a few minutes, a few hours, even a
                    few days? Don't take someone from their work if you don't
                    have to.
                  </p>
                  <p>
                    If people are working from the same location, it is
                    important that they do not skimp on writing things down.
                  </p>
                  <p>Everyone should use the same tools to communicate.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical className="stripe">
          <Container>
            <Header as="h2">Job Opportunities</Header>
            <Message warning>
              <Message.Header>
                Add any number of job categories here
              </Message.Header>
              <p>
                We should decide if they are going to be general areas or
                technology areas.
              </p>
            </Message>
            <Card.Group itemsPerRow="two" doubling stackable>
              {opportunities.map(opp => (
                <Card as="a" href="#">
                  <div
                    style={{
                      opacity: 0.7,
                      height: "15rem",
                      backgroundImage: `url(${opp.image})`,
                      backgroundSize: "cover"
                    }}
                  />
                  <Header
                    style={{
                      background:
                        "linear-gradient(to bottom, #00000000, #000000FF)",
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "2rem 1rem 1rem",
                      color: "#fff"
                    }}
                    as="h2"
                  >
                    <Icon name={opp.icon as SemanticICONS} />
                    <Header.Content>{opp.label}</Header.Content>
                  </Header>
                </Card>
              ))}
            </Card.Group>
          </Container>
        </Segment>
        <Segment vertical className="stripe alternate feature">
          <Container>
            <Header as="h2">Recommended Reading</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <BookList books={books} />
          </Container>
        </Segment>
        <Segment vertical className="stripe feature">
          <Container>
            <ContentWithImage
              src={require("../assets/images/stock/globe.jpeg")}
              title="Apply for position"
              content={
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <Message warning size="tiny">
                    <Message.Header>Form?</Message.Header>
                    We should either create an inline form, or create a separate
                    application page
                  </Message>
                </span>
              }
              buttonLabel="Start your application"
              buttonIcon="chevron right"
            />
          </Container>
        </Segment>
        <Segment vertical className="stripe feature alternate">
          <Container>
            <Accordion fluid styled>
              {[
                {
                  title:
                    "Do I need a computer science degree to be a RunningBeta software engineer?",
                  answer:
                    "No, a CS degree isn’t required for our software engineering or product manager roles."
                },
                {
                  title: "Will you let me know when a job has been filled?",
                  answer:
                    "If you haven’t heard from us in two months about an application, we likely proceeded with other candidates for that particular role. However, our recruiters might reach out if we find a different potential match for your skills, interests, and experience."
                },
                {
                  title: "Can I apply for multiple jobs?",
                  answer:
                    "Yes, you can apply for more than one role at once, though we recommend narrowing your choices down to a few jobs that truly match your skills, experience, and interests. We’ll review your resume/CV—and transcript for interns and new graduates—to determine the best fit."
                },
                {
                  title: "How many jobs can I apply for?",
                  answer:
                    "You can apply to three jobs within a rolling 30 day window. This limit gives our hard-working staffing team more time to focus on your application and helps you focus on the jobs that are the best match for your talents."
                },
                {
                  title: "What are the application deadlines?",
                  answer:
                    "Our job descriptions will include any application deadlines. For most of our openings, we accept applications on a rolling basis, and we encourage you to apply sooner rather than later."
                },
                {
                  title:
                    "I interviewed/applied last year and wasn’t selected. May I reapply?",
                  answer:
                    "For engineering roles, we ask that you wait a year—to gain additional experience—before reapplying."
                }
              ].map((f, i) => (
                <React.Fragment>
                  <Accordion.Title
                    active={activeIndex === i}
                    index={i}
                    key={f.title}
                    onClick={this.handleClick}
                  >
                    <h2>
                      <Icon name="dropdown" />
                      {f.title}
                    </h2>
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === i}>
                    <p>{f.answer}</p>
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </Accordion>
          </Container>
        </Segment>
        <Segment vertical className="stripe feature" />
      </div>
    );
  }
}

export default withLayout(CareersPage);
