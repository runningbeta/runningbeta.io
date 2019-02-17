import * as React from "react";
import { withLayout, LayoutProps } from "../components/Layout";
import {
  Header,
  Container,
  Segment,
  Icon,
  List,
  Placeholder,
  Card,
  Image,
  Message
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
    label: "Engineering",
    icon: "settings"
  },
  {
    label: "eCommerce",
    icon: "call"
  },
  {
    label: "Editorial",
    icon: "pencil"
  },
  {
    label: "Sales",
    icon: "chart line"
  },
  {
    label: "Corporate",
    icon: "building"
  },
  {
    label: "Internship",
    icon: "settings"
  }
];

const CareersPage = (props: LayoutProps) => {
  return (
    <div>
      <Masthead
        {...props}
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
          <Card.Group itemsPerRow="three" doubling stackable>
            {opportunities.map(opp => (
              <Card>
                <Header
                  style={{ position: "absolute", bottom: 0, left: "1rem" }}
                  as="h2"
                >
                  <Icon name={opp.icon as SemanticICONS} />
                  <Header.Content>{opp.label}</Header.Content>
                </Header>
                <Placeholder>
                  <Placeholder.Image style={{ height: "15rem" }} />
                </Placeholder>
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
          <BookList
            books={[
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
                // cover: "../assets/images/books/mastering_bitcoin.jpeg"
              }
            ]}
          />
        </Container>
      </Segment>
      <Segment vertical className="stripe feature">
        <Container>
          <ContentWithImage
            title="Apply for position"
            content={
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    </div>
  );
};

export default withLayout(CareersPage);
