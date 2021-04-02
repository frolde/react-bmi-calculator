import React from "react";

const Button = (props) => {
  return (
    <div className="form-group text-center">
      <div className="btn btn-outline-light" onClick={props.onClick}>{props.label}</div>
    </div>
  );
};

export default Button;
