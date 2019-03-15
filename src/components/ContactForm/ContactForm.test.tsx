import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import ContactForm from "./ContactForm";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

describe("ContactForm component", () => {
  it("should render correctly", () => {
    const wrapper = render(<ContactForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
