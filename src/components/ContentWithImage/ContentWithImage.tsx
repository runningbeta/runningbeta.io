import * as React from 'react';
import {
  Button,
  Header,
  Container,
  Grid,
  Placeholder,
  Icon,
  SemanticSIZES,
  SemanticICONS,
  SemanticCOLORS,
} from 'semantic-ui-react';

interface ContentWithImageProps {
  title: string;
  content: string | JSX.Element;
  buttonColor?: SemanticCOLORS;
  buttonLabel?: string;
  buttonSize?: SemanticSIZES;
  buttonIcon?: SemanticICONS;
  primary?: boolean;
  secondary?: boolean;
  src?: any;
  opacity?: number;
  contentOrientation?: 'text-image' | 'image-text';
}

export const ContentWithImage = (props: ContentWithImageProps) => {
  return (
    <Container>
      <Grid columns="2" textAlign="left" relaxed stackable>
        <Grid.Row>
          {props.contentOrientation === 'image-text' && (
            <Grid.Column>
              {props.src ? (
                <div
                  style={{
                    opacity: props.opacity || 0.7,
                    height: '100%',
                    backgroundImage: `url(${props.src})`,
                    backgroundSize: 'cover',
                  }}
                />
              ) : (
                  <Placeholder>
                    <Placeholder.Image rectangular />
                  </Placeholder>
                )}
            </Grid.Column>
          )}
          <Grid.Column>
            <Header as="h1">{props.title}</Header>
            <div>{props.content}</div>
            {props.buttonLabel && (
              <Button
                style={{ marginTop: '2.5rem' }}
                basic={!props.primary && !props.secondary}
                primary={false || props.primary}
                secondary={false || props.secondary}
                color={props.buttonColor || 'black'}
                size={props.buttonSize || 'large'}
              >
                {props.buttonLabel}
                {props.buttonIcon && <Icon name={props.buttonIcon} />}
              </Button>
            )}
          </Grid.Column>
          {props.contentOrientation !== 'image-text' && (
            <Grid.Column>
              {props.src ? (
                <div
                  style={{
                    opacity: props.opacity || 0.7,
                    height: '100%',
                    backgroundImage: `url(${props.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                />
              ) : (
                  <Placeholder>
                    <Placeholder.Image rectangular />
                  </Placeholder>
                )}
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ContentWithImage;
