import * as React from 'react';
import { withLayout, LayoutProps } from '../components/Layout';
import { Message, Header, Container, Segment, Grid } from 'semantic-ui-react';
import Masthead from '../components/Masthead/Masthead';

const AboutPage = (props: LayoutProps) => {
  return (
    <div>
      <Masthead
        {...props}
        title="About"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Segment vertical className="stripe feature unfinished">
        <Container>
          <Grid textAlign="center" stackable columns="2">
            <Grid.Row>
              <Grid.Column>
                <Header style={{ margin: '1.5em 0 1em' }} as="h2">
                  Our Mission
                </Header>
                <p>
                  [Rafinery29 is catalyst for women to feel, see, and claim
                  their power.]
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header style={{ margin: '1.5em 0 1em' }} as="h2">
                  Our Essence
                </Header>
                <p>
                  [At our core, Rafinery operates on imagination, individuality,
                  inclusivity, and impact.]
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header style={{ margin: '1.5em 0 1em' }} as="h2">
                  Our Promise
                </Header>
                <p>
                  [We deliver optimistic and diverse storytelling, experiences,
                  and points of view to our audience of smart, curious,
                  passionate women.]
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header style={{ margin: '1.5em 0 1em' }} as="h2">
                  Our Vibe
                </Header>
                <p>
                  [At Refinery29, we make magic. We dream it, and then do
                  it-together-every day reinventing what's possible.]
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default withLayout(AboutPage);
