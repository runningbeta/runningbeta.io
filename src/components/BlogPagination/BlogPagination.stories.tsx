/* tslint:disable no-var-requires no-submodule-imports */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const BlogPaginationReadme = require("./README.md");

import { action } from "@storybook/addon-actions";
import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import BlogPagination from "./BlogPagination";

const LinkStub = ((props: any) =>
  <div {...props} onClick={action(props.to.toString())} >{props.children}</div>) as any;

storiesOf("BlogPagination", module)
  .addDecorator(withReadme(BlogPaginationReadme))
  .addDecorator(withKnobs)
  .add("default", () => {
    const activePage = number("activePage", 1);
    const pathname = `/blog/page/${activePage}/`;
    const pageCount = number("pageCount", 10);

    return (
      <BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />
    );
  });
