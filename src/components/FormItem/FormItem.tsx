import classnames from "classnames";
import React from "react";

interface IFormItemProps extends React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
  error: string[];
  label: string;
  showValidation: boolean;
  visited: boolean;
}

export default (props: IFormItemProps) => {
  return (
    <div
      className={classnames({
        error: Boolean(
          props.showValidation &&
          props.error &&
          props.error[0],
        ),
        field: true,
        required: !!props.required,
      })}
    >
      <label>{props.label}</label>
      <div className="ui input" style={{ flexDirection: "column" }}>
        <input
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
          type={props.type}
          value={props.value}
        />
        <div className="validation" style={{ marginTop: "0.5rem" }}>
          {props.showValidation &&
            props.error &&
            props.error[0]}
        </div>
      </div>
    </div>
  );
};
