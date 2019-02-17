import * as React from "react";
import {
  Button,
  Header,
  Container,
  Grid,
  Image,
  Placeholder,
  Icon,
  SemanticSIZES,
  SemanticICONS
} from "semantic-ui-react";

type ContentOrientation = "text-image" | "image-text";

interface ContentWithImageProps {
  title: string;
  content: string | JSX.Element;
  buttonLabel?: string;
  buttonSize?: SemanticSIZES;
  buttonIcon?: SemanticICONS;
  src?: any;
  contentOrientation?: ContentOrientation;
}

export const ContentWithImage = (props: ContentWithImageProps) => {
  return (
    <Container>
      <Grid stretched columns="2" textAlign="left" relaxed stackable>
        <Grid.Row>
          {props.contentOrientation === "image-text" && (
            <Grid.Column>
              {props.src ? (
                <div
                  style={{
                    opacity: 0.7,
                    height: "100%",
                    backgroundImage: `url(${props.src})`,
                    backgroundSize: "cover"
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
            <p>{props.content}</p>
            {props.buttonLabel && (
              <Button basic color="black" size={props.buttonSize || "large"}>
                {props.buttonLabel}
                {props.buttonIcon && <Icon name={props.buttonIcon} />}
              </Button>
            )}
          </Grid.Column>
          {props.contentOrientation !== "image-text" && (
            <Grid.Column>
              {props.src ? (
                <div
                  style={{
                    opacity: 0.7,
                    height: "100%",
                    backgroundImage: `url(${props.src})`,
                    backgroundSize: "cover"
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
