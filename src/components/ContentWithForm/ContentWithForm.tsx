import * as React from "react";
import { Grid, Responsive } from "semantic-ui-react";

interface IContentWithFormProps {
  form: JSX.Element;
  content: string | JSX.Element;
}

export default (props: IContentWithFormProps) => {
  return (
    <Grid columns={2} doubling={true} relaxed={true} stackable={true} verticalAlign="top">
      <Grid.Row>
        <Responsive
          as={Grid.Column}
          maxWidth={Responsive.onlyTablet.maxWidth}
        >
          {props.content}
        </Responsive>
        <Grid.Column>
          {props.form}
        </Grid.Column>
        <Responsive
          as={Grid.Column}
          minWidth={Responsive.onlyComputer.minWidth}
        >
          {props.content}
        </Responsive>
      </Grid.Row>
    </Grid>
  );
};
