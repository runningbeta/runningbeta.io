import React, { Component } from 'react';
import { withLayout, LayoutProps } from '../components/Layout';
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
  Segment,
} from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

import Masthead from '../components/Masthead/Masthead';
import ContentWithImage from '../components/ContentWithImage/ContentWithImage';

import Opportunities from '../data/opportunities';
import Books from '../data/books';
import CareerQuestions from '../data/careerQuestions';

const BookList = (props: any) => (
  <div>
    <Card.Group itemsPerRow="5" doubling>
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

class CareersPage extends Component<LayoutProps> {
  state = { activeIndex: 0 };

  handleClick = (e: React.MouseEvent<HTMLElement>, titleProps: any) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <div>
        <Masthead
          {...this.props}
          title="Careers"
          // tslint:disable: max-line-length
          subtitle="RunningBeta was founded in 2017 as a result of our aspiration to create a community based on transparent work culture that will employ the best professionals in the world. Our goal is to work on meaningful projects that help create a better future and bring them to life using the best technologies available."
        // buttonLabel="Start your application"
        // buttonIcon="chevron right"
        />
        <Segment vertical className="stripe feature">
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
                      height: '15rem',
                      width: '100%',
                      backgroundImage: `url(${require('../assets/images/stock/distributed.jpeg')})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
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
        <Segment vertical className="stripe feature alternate">
          <Container>
            <Header as="h2">Job Opportunities</Header>
            <Card.Group itemsPerRow="two" doubling stackable>
              {Opportunities.map(
                (opp: {
                  image: string;
                  icon: SemanticICONS;
                  label: string;
                }) => (
                    <Card key={opp.label} as="a" href="#">
                      <div
                        style={{
                          opacity: 0.7,
                          height: '15rem',
                          backgroundImage: `url(${opp.image})`,
                          backgroundSize: 'cover',
                        }}
                      />
                      <Header
                        style={{
                          background:
                            'linear-gradient(to bottom, #00000000, #000000FF)',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '2rem 1rem 1rem',
                          color: '#fff',
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
        <Segment vertical className="stripe feature unfinished">
          <Container>
            <Header as="h2">Recommended Reading</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <BookList books={Books} />
          </Container>
        </Segment>
        <Segment vertical className="stripe feature alternate unfinished">
          <Container>
            <ContentWithImage
              src={require('../assets/images/stock/globe.jpeg')}
              title="Apply for position"
              content={
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              }
              buttonLabel="Start your application"
              buttonIcon="chevron right"
            />
          </Container>
        </Segment>
        <Segment vertical className="stripe feature unfinished">
          <Container>
            <Accordion fluid styled>
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
                    style={{ paddingLeft: '6rem' }}
                    active={activeIndex === i}
                  >
                    <p>{f.answer}</p>
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </Accordion>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default withLayout(CareersPage);
