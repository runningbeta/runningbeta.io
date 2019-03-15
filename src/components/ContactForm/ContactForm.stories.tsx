/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const ContactFormReadme = require("./README.md");

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ContactForm from "./ContactForm";

storiesOf("ContactForm", module)
  .addDecorator(withReadme(ContactFormReadme))
  .add("default", () => (
    <ContactForm />
  ));
