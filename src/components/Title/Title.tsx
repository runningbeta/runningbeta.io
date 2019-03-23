import React from "react";
import {
  Header,
  Image,
  Responsive,
  SemanticSIZES,
} from "semantic-ui-react";

interface IContentWithImageProps {
  title: string;
  src?: any;
  imageSize: SemanticSIZES;
}

export const Title = (props: IContentWithImageProps) => (
  <div style={{ marginBottom: "1em" }}>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Image
        style={{ margin: "1.5em 0" }}
        src={props.src}
        size={props.imageSize}
      />
    </Responsive>
    <Header style={{ margin: 0 }}>{props.title}</Header>
  </div>
);

export default Title;
