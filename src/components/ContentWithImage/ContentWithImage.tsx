import GatsbyLink from "gatsby-link";
import * as React from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  Placeholder,
  SemanticCOLORS,
  SemanticICONS,
  SemanticSIZES,
} from "semantic-ui-react";

interface IContentWithImageProps {
  buttonColor?: SemanticCOLORS;
  buttonIcon?: SemanticICONS;
  buttonLabel?: string;
  buttonSize?: SemanticSIZES;
  buttonTo?: string;
  buttonState?: any;
  content: string | JSX.Element;
  contentOrientation?: "text-image" | "image-text";
  opacity?: number;
  primary?: boolean;
  secondary?: boolean;
  src?: any;
  title?: string;
}

export const ContentWithImage = (props: IContentWithImageProps) => {
  return (
    <Grid columns="2" textAlign="left" relaxed={true} stackable={true}>
      <Grid.Row>
        {props.contentOrientation === "image-text" && (
          <Grid.Column>
            {props.src ? (
              <div
                style={{
                  backgroundImage: `url(${props.src})`,
                  backgroundSize: "cover",
                  height: "100%",
                  opacity: props.opacity || 0.7,
                }}
              />
            ) : (
                <Placeholder>
                  <Placeholder.Image rectangular={true} />
                </Placeholder>
              )}
          </Grid.Column>
        )}
        <Grid.Column>
          {props.title && <Header as="h2">{props.title}</Header>}
          <div>{props.content}</div>
          {props.buttonLabel && (
            <Button
              as={GatsbyLink}
              basic={!props.primary && !props.secondary}
              color={props.buttonColor || "black"}
              primary={false || props.primary}
              secondary={false || props.secondary}
              size={props.buttonSize || "large"}
              to={props.buttonTo}
              state={props.buttonState}
            >
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
                  backgroundImage: `url(${props.src})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "100%",
                  opacity: props.opacity || 0.7,
                }}
              />
            ) : (
                <Placeholder>
                  <Placeholder.Image rectangular={true} />
                </Placeholder>
              )}
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default ContentWithImage;
