import GatsbyLink from "gatsby-link";
import React, { Component } from "react";
import {
  Accordion,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
// tslint:disable-next-line no-submodule-imports
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";
import { ILayoutProps, withLayout } from "../components/Layout";

import ContentWithImage from "../components/ContentWithImage/ContentWithImage";
import Masthead from "../components/Masthead/Masthead";

import Books from "../data/books";
import CareerQuestions from "../data/careerQuestions";
import Opportunities from "../data/opportunities";

const BookList = (props: any) => (
  <div>
    <Card.Group itemsPerRow="5" doubling={true}>
      {props.books.map((book: any) => (
        <Card as="a" href="/" key={book.name}>
          {book.cover && <Image src={book.cover} />}
          <Card.Content>
            <Card.Header>{book.name}</Card.Header>
            <Card.Description>
              <List>
                {book.author.map((a: string) => (
                  <List.Item key={a}>{a}</List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

class CareersPage extends Component<ILayoutProps> {
  public state = { activeIndex: 0 };

  public handleClick = (e: React.MouseEvent<HTMLElement>, titleProps: any) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  public render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Masthead
          {...this.props}
          buttonIcon="chevron right"
          buttonLabel="Start your application"
          buttonTo="/application/"
          // tslint:disable: max-line-length
          subtitle="RunningBeta was founded in 2017 as a result of our aspiration to create a community based on transparent work culture that will employ the best professionals in the world. Our goal is to work on meaningful projects that help create a better future and bring them to life using the best technologies available."
          title="Careers"
        />
        <Segment vertical={true} className="stripe feature">
          <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header className="title" as="h1">We are Distributed</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <div
                    style={{
                      backgroundImage: `url(${require("../assets/images/stock/distributed.jpeg")})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      height: "15rem",
                      opacity: 0.7,
                      width: "100%",
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as="h2">Work from anywhere you want</Header>
                  <p>
                    Working remotely allows you to be there for the ones you
                    love, and be more available for them. It allows you to see
                    more places, without ever having to commute. On top of that,
                    working remotely removes almost every distraction.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment vertical={true} className="stripe feature alternate">
          <Container>
            <Header className="title" as="h1">Job Opportunities</Header>
            <Card.Group itemsPerRow="two" doubling={true} stackable={true}>
              {Opportunities.map(
                (opp: {
                  image: string;
                  icon: SemanticICONS;
                  label: string;
                }) => (
                    <Card
                      key={opp.label}
                      as={GatsbyLink}
                      to="/application/"
                      state={{ position: opp.label }}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${opp.image})`,
                          backgroundSize: "cover",
                          height: "15rem",
                          opacity: 0.7,
                        }}
                      />
                      <Header
                        style={{
                          background: "linear-gradient(to bottom, #00000000, #000000FF)",
                          bottom: 0,
                          color: "#fff",
                          left: 0,
                          padding: "2rem 1rem 1rem",
                          position: "absolute",
                          right: 0,
                        }}
                        as="h2"
                      >
                        <Icon name={opp.icon as SemanticICONS} />
                        <Header.Content>{opp.label}</Header.Content>
                      </Header>
                    </Card>
                  ),
              )}
            </Card.Group>
          </Container>
        </Segment>
        <Segment vertical={true} className="stripe feature unfinished">
          <Container>
            <Header className="title" as="h1">Recommended Reading</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <BookList books={Books} />
          </Container>
        </Segment>
        <Segment vertical={true} className="stripe feature alternate unfinished">
          <Container>
            <Header className="title" as="h1">Apply for position</Header>
            <ContentWithImage
              button={{
                basic: true,
                color: "black",
                icon: "chevron right",
                label: "Start your application",
                linkProps: {
                  to: "/application/",
                },
              }}
              content={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              }
              src={require("../assets/images/stock/globe.jpeg")}
            />
          </Container>
        </Segment>
        {/* <Segment vertical={true} className="stripe feature unfinished">
          <Container>
            <Accordion fluid={true} styled={true}>
              {CareerQuestions.map((f, i) => (
                <React.Fragment key={f.title}>
                  <Accordion.Title
                    active={activeIndex === i}
                    index={i}
                    onClick={this.handleClick}
                  >
                    <Header as="h4">
                      <Icon name="dropdown" />
                      {f.title}
                    </Header>
                  </Accordion.Title>
                  <Accordion.Content
                    style={{ paddingLeft: "6rem" }}
                    active={activeIndex === i}
                  >
                    <p>{f.answer}</p>
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </Accordion>
          </Container>
        </Segment> */}
      </div>
    );
  }
}

export default withLayout(CareersPage);
