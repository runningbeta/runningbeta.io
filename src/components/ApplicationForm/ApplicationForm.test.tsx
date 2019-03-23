import { configure, render } from "enzyme";
import "jest";
import * as React from "react";
import ApplicationForm from "./ApplicationForm";

// Configure enzyme with react 16 adapter
/* tslint:disable-next-line no-var-requires */
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("ApplicationForm component", () => {
  it("should render correctly", () => {
    const wrapper = render(<ApplicationForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
