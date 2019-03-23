/* tslint:disable no-var-requires */
// tslint:disable-next-line no-submodule-imports
const withReadme = (require("storybook-readme/with-readme") as any).default;
const ApplicationFormReadme = require("./README.md");

// import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import ApplicationForm from "./ApplicationForm";

storiesOf("ApplicationForm", module)
  .addDecorator(withReadme(ApplicationFormReadme))
  .add("default", () => (
    <ApplicationForm />
  ));
