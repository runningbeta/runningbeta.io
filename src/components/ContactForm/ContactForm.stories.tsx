/* tslint:disable no-var-requires no-submodule-imports */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const ContactFormReadme = require("./README.md");

// import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import ContactForm from "./ContactForm";

storiesOf("ContactForm", module)
  .addDecorator(withReadme(ContactFormReadme))
  .add("default", () => (
    <ContactForm />
  ));
