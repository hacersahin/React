import React from "react";

const Button = (props) => {
  return (
    <div className="btn btn-primary" onClick={props.onClick}>
      {props.buton}
    </div>
  );
};

export default Button;
