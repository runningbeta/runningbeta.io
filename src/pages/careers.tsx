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
class CareersPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
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
            <Header as="h2">Job opportunities</Header>
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
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                What is a dog?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>
                  A dog is a type of domesticated animal. Known for its loyalty
                  and faithfulness, it can be found as a welcome guest in many
                  households across the world.
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                What kinds of dogs are there?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>
                  There are many breeds of dogs. Each breed varies in size and
                  temperament. Owners often select a breed of dog that they find
                  to be compatible with their own lifestyle and desires from a
                  companion.
                </p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                How do you acquire a dog?
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>
                  Three common ways for a prospective owner to acquire a dog is
                  from pet shops, private owners, or shelters.
                </p>
                <p>
                  A pet shop may be the most convenient way to buy a dog. Buying
                  a dog from a private owner allows you to assess the pedigree
                  and upbringing of your dog before choosing to take it home.
                  Lastly, finding your dog from a shelter, helps give a good
                  home to a dog who may not find one so readily.
                </p>
              </Accordion.Content>
            </Accordion>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default withLayout(CareersPage);
