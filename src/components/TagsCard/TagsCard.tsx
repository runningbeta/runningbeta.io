import { GatsbyLinkProps } from "gatsby-link";
import React from "react";
import { Card, List } from "semantic-ui-react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";

interface ITagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  tag?: string;
}

export default (props: ITagsCardProps) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          Tags
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <List>
          {props.tags.map((tag) => {
            const isActive = tag.fieldValue === props.tag;
            const activeStyle = {
              fontWeight: "700",
            };
            const tagLink = isActive ? "/blog" : `/blog/tags/${tag.fieldValue}/`;
            return (
              <List.Item as="span" key={tag.fieldValue}>
                <List.Icon name="tag" color={isActive ? "blue" : null} />
                <List.Content style={isActive ? activeStyle : null}>
                  <props.Link to={tagLink}>
                    {tag.fieldValue} ({tag.totalCount})
                  </props.Link>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
      </Card.Content>
    </Card>
  );
};
