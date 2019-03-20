import * as React from 'react';
import {
  Image,
  Header,
  Responsive,
  SemanticSIZES,
  Grid,
} from 'semantic-ui-react';

interface ContentWithImageProps {
  title: string;
  src?: any;
  imageSize: SemanticSIZES;
}

export const Title = (props: ContentWithImageProps) => (
  <div style={{ marginBottom: '1em' }}>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Image
        style={{ margin: '1.5em 0' }}
        src={props.src}
        size={props.imageSize}
      />
    </Responsive>
    <Header style={{ margin: 0 }}>{props.title}</Header>
  </div>
);

export default Title;
