import { GatsbyLinkProps } from "gatsby-link";
import * as React from "react";
import {
  Button,
  ButtonProps,
  Grid,
  Header,
  Icon,
  Placeholder,
  SemanticICONS,
} from "semantic-ui-react";

interface IButtonProps<TState> extends ButtonProps {
  icon?: SemanticICONS;
  label?: string;
  linkProps?: {
    href: string,
    rel: string,
    target: string,
  } | GatsbyLinkProps<TState>;
}

interface IContentWithImageProps<TState> {
  button?: IButtonProps<TState>;
  content: string | JSX.Element;
  contentOrientation?: "text-image" | "image-text";
  opacity?: number;
  src?: any;
  title?: string;
}

const ActionButton = (props: IButtonProps<any>) => {
  const {
    icon,
    label,
    linkProps,
    ...button
  } = props;

  const {
    color,
    onClick,
    ref,
    ...link
  } = linkProps;

  return (
    <Button
      {...button}
      {...link}
    >
      {label}
      {icon && <Icon name={icon} />}
    </Button>
  );
};

export const ContentWithImage = (props: IContentWithImageProps<any>) => {
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
          {props.button && (
            <ActionButton {...props.button} />
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
    </Grid >
  );
};

export default ContentWithImage;
