import { configure, render } from "enzyme";
import "jest";
import * as React from "react";
import FormItem from "./FormItem";

// Configure enzyme with react 16 adapter
/* tslint:disable-next-line no-var-requires */
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("FormInput component", () => {
  it("should render correctly", () => {
    const error: string[] = null; // TODO assign real value
    const label: string = null; // TODO assign real value
    const showValidation: boolean = null; // TODO assign real value
    const visited: boolean = null; // TODO assign real value

    const wrapper = render(
      <FormItem
        label={label}
        visited={visited}
        showValidation={showValidation}
        error={error}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
