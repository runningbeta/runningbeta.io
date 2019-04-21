/* tslint:disable no-var-requires no-submodule-imports */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const FormItemReadme = require("./README.md");

import { storiesOf } from "@storybook/react";
import * as React from "react";
import FormItem from "./FormItem";

storiesOf("FormItem", module)
  .addDecorator(withReadme(FormItemReadme))
  .add("default", () => {
    const error: string[] = null; // TODO assign real value
    const label: string = null; // TODO assign real value
    const showValidation: boolean = null; // TODO assign real value
    const visited: boolean = null; // TODO assign real value

    return (
      <FormItem
        error={error}
        label={label}
        showValidation={showValidation}
        visited={visited}
      />
    );
  });
