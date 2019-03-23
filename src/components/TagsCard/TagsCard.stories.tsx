// tslint:disable no-var-requires no-submodule-imports
const withReadme = (require("storybook-readme/with-readme") as any).default;
const TagsCardReadme = require("./README.md");

import { action } from "@storybook/addon-actions";
import { select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { markdownRemarkGroupConnectionConnection } from "../../graphql-types";
import TagsCard from "./TagsCard";

const tags = [
  { fieldValue: "tag01", totalCount: 2 },
  { fieldValue: "tag02", totalCount: 4 },
  { fieldValue: "tag03", totalCount: 6 },
] as markdownRemarkGroupConnectionConnection[];

const LinkStub = ((props: any) =>
  <div onClick={action(props.to.toString())} >{props.children}</div>) as any;

storiesOf("TagsCard", module)
  .addDecorator(withReadme(TagsCardReadme))
  .addDecorator(withKnobs)
  .add("default", () => {
    return <TagsCard tags={tags} Link={LinkStub} />;
  })
  .add("with tag property", () => {
    const tag = select("Tag", tags.map((t) => t.fieldValue), "tag01");
    return <TagsCard tags={tags} tag={tag} Link={LinkStub} />;
  });
