import classnames from "classnames";
import React from "react";
import validate from "validate.js";

import { concat, isEmpty } from "lodash";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Container, Dropdown, Grid, Header, Icon } from "semantic-ui-react";

import trackEvent from "../../analytics/trackEvent";
import FormItem from "../../components/FormItem/FormItem";
import Opportunities from "../../data/opportunities";

function encode(data: any) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

interface IApplicationFormProps {
  position?: string;
}

interface IApplicationFormState {
  constraints: any;
  contactMeByFax: string;
  curriculumVitae: string;
  email: string;
  errors: { [key: string]: string[] };
  github: string;
  gRecaptchaResponse: any;
  isValid: boolean;
  linkedin: string;
  message: string;
  name: string;
  position: string;
  showValidation: boolean;
  subject: string;
  thanksVisible: boolean;
  visited: { [key: string]: boolean };
}

export default class Contact extends React.Component<
  IApplicationFormProps,
  IApplicationFormState
  > {
  public state: IApplicationFormState = {
    constraints: {
      curriculumVitae: { url: true },
      email: { email: true, presence: { allowEmpty: false } },
      github: { url: true },
      linkedin: { url: true },
      message: { presence: { allowEmpty: false } },
      name: { presence: { allowEmpty: false } },
      position: { presence: { allowEmpty: false } },
      subject: { presence: { allowEmpty: false } },
    },
    contactMeByFax: "",
    curriculumVitae: "",
    email: "",
    errors: {},
    github: "",
    gRecaptchaResponse: "",
    isValid: true,
    linkedin: "",
    message: "",
    name: "",
    position: "",
    showValidation: false,
    subject: "",
    thanksVisible: false,
    visited: {},
  };

  public handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { constraints } = this.state;
    const formInput = e.target as HTMLInputElement;
    const state = { ...this.state, [formInput.name]: formInput.value };
    const errors = validate(state, constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  }

  public handleBlur = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { visited, constraints } = this.state;
    const formInput =
      (e.target as HTMLInputElement) || (e.target as HTMLTextAreaElement);

    const state = {
      ...this.state,
      visited: {
        ...visited,
        [formInput.name]: true,
      },
    };
    const errors = validate(state, constraints);
    this.setState({ ...state, errors, isValid: isEmpty(errors) });
  }

  public handleRecaptcha = (value: any) => {
    this.setState({ gRecaptchaResponse: value });
  }

  public handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const state = this.state;
    const { constraints } = state;
    const errors = validate(state, constraints);

    this.setState({
      ...state,
      errors,
      isValid: isEmpty(errors),
      showValidation: true,
    });

    if (!isEmpty(errors)) {
      return;
    }

    fetch("/", {
      body: encode({
        "contactMeByFax": this.state.contactMeByFax,
        "curriculumVitae": this.state.curriculumVitae,
        "email": this.state.email,
        "form-name": "contact",
        "g-recaptcha-response": this.state.gRecaptchaResponse,
        "github": this.state.github,
        "linkedin": this.state.linkedin,
        "message": this.state.message,
        "name": this.state.name,
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
    })
      .then((r) => {
        const { name, message } = this.state;
        trackEvent("Contact Form", "Submit", name, message);
        this.setState({
          contactMeByFax: "",
          curriculumVitae: "",
          email: "",
          errors: {},
          github: "",
          linkedin: "",
          message: "",
          name: "",
          thanksVisible: true,
          visited: {},
        });
      })
      .catch((err) => {
        return;
      });
  }

  public toggleThanks = () => {
    this.setState({ thanksVisible: false });
  }

  public render() {
    const {
      contactMeByFax,
      curriculumVitae,
      email,
      errors,
      github,
      gRecaptchaResponse,
      isValid,
      linkedin,
      message,
      name,
      showValidation,
      thanksVisible,
      visited,
    } = this.state;

    const opportunityDropdownOptions = concat(
      [{
        key: "Other",
        text: "Other",
        value: "Other",
      }],
      Opportunities.map((x) => ({
        key: x.label,
        text: x.label,
        value: x.label,
      })));

    return (
      <Container>
        <Grid stackable={true} centered={true}>
          <Grid.Row>
            <Grid.Column>
              <form
                className="ui form contactForm"
                data-netlify-honeypot="contactMeByFax"
                data-netlify-recaptcha="true"
                data-netlify="true"
                method="POST"
                name="contact"
                noValidate={true}
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="required field" style={{ display: "none" }}>
                  <label>Contact me by fax</label>
                  <div className="ui input">
                    <input
                      type="text"
                      name="contactMeByFax"
                      placeholder="Fax Number"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      value={contactMeByFax}
                      required={true}
                    />
                  </div>
                </div>
                <FormItem
                  error={errors.name}
                  label="Full Name"
                  name="name"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  placeholder="Your Name"
                  required={true}
                  showValidation={visited.name || showValidation}
                  type="text"
                  value={name}
                  visited={visited.name}
                />
                <FormItem
                  error={errors.email}
                  label="Email"
                  name="email"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  placeholder="your@email.com"
                  required={true}
                  showValidation={visited.email || showValidation}
                  type="email"
                  value={email}
                  visited={visited.email}
                />
                <div
                  className={classnames({
                    error: Boolean(
                      (visited.subject || showValidation) &&
                      errors &&
                      errors.subject,
                    ),
                    field: true,
                    required: true,
                  })}
                >
                  <label>Position</label>
                  <div className="ui input" style={{ flexDirection: "column" }}>
                    <Dropdown
                      fluid={true}
                      options={opportunityDropdownOptions}
                      placeholder="Select position..."
                      selection={true}
                    />
                    < div className="validation" style={{ marginTop: "0.5rem" }}>
                      {(visited.subject || showValidation) &&
                        errors &&
                        errors.subject &&
                        errors.subject[0]}
                    </div>
                  </div>
                </div>
                <FormItem
                  error={errors.linkedin}
                  label="LinkedIn"
                  name="linkedin"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  placeholder="https://linkedin.com/your_account"
                  showValidation={visited.linkedin || showValidation}
                  type="text"
                  value={linkedin}
                  visited={visited.linkedin}
                />
                <FormItem
                  error={errors.github}
                  label="GitHub"
                  name="github"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  placeholder="https://github.com/your_account"
                  showValidation={visited.github || showValidation}
                  type="text"
                  value={github}
                  visited={visited.github}
                />
                <FormItem
                  error={errors.curriculumVitae}
                  label="Curriculum Vitae"
                  name="curriculumVitae"
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  placeholder="Link to your CV"
                  required={true}
                  showValidation={visited.curriculumVitae || showValidation}
                  type="text"
                  value={curriculumVitae}
                  visited={visited.curriculumVitae}
                />
                <div
                  className={classnames({
                    error: Boolean(
                      (visited.message || showValidation) &&
                      errors &&
                      errors.message,
                    ),
                    field: true,
                    required: true,
                  })}
                >
                  <label>Message</label>
                  <div className="ui input" style={{ flexDirection: "column" }}>
                    <textarea
                      name="message"
                      onBlur={this.handleBlur}
                      onChange={this.handleChange}
                      placeholder="Your Message"
                      required={true}
                      rows={5}
                      value={message}
                    />
                    <div className="validation" style={{ marginTop: "0.5rem" }}>
                      {(visited.message || showValidation) &&
                        errors &&
                        errors.message &&
                        errors.message[0]}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <ReCAPTCHA
                    onChange={this.handleRecaptcha}
                    // tslint:disable-next-line jsx-no-string-ref
                    ref="recaptcha"
                    sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
                  />
                </div>
                <Button
                  disabled={!gRecaptchaResponse || !isValid}
                  primary={true}
                  size="large"
                  style={{ width: "50%" }}
                  type="submit"
                >
                  Apply
                  <Icon name="chevron right" />
                </Button>
              </form>
            </Grid.Column>
          </Grid.Row>
          {thanksVisible && (
            <div
              style={{
                alignItems: "center",
                backgroundColor: "white",
                bottom: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                left: 0,
                position: "absolute",
                right: 0,
                textAlign: "left",
                top: 0,
              }}
            >
              <div style={{ maxWidth: 500 }}>
                <Button
                  style={{
                    float: "right",
                    marginTop: "calc(2rem - .14285714em)",
                  }}
                  color="black"
                  inverted={true}
                  icon={true}
                  basic={true}
                  onClick={this.toggleThanks}
                >
                  <Icon color="black" name="x" />
                </Button>
                <Header as="h2">Thank you for getting in touch!</Header>
                <p>
                  We appreciate you contacting us. One of our team members will
                  be getting back to you shortly.
                </p>
                <p>
                  While we do our best to answer your queries quickly, it may
                  take a day or two to receive a response from us during peak
                  days.
                </p>
                <p>Thanks in advance for your patience.</p>
                <p>Have a great day!</p>
              </div>
            </div>
          )}
        </Grid>
      </Container>
    );
  }
}
