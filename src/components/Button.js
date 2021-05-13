import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div
      style={{
        color: props.color ? props.color : "black",
        background: (props.label === "=" || props.label === "") && "red"
      }}
      className="Button"
      onClick={props.onClick}
    >
      {props.label !== "=" ? (
        <React.Fragment>{props.label}</React.Fragment>
      ) : (
        <div className="equalButton">{props.label}</div>
      )}
    </div>
  );
};

export default Button;
