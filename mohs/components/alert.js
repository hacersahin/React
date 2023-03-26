import React from "react";

const Alert = (props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {props.alert}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.kapat}
      ></button>
    </div>
  );
};

export default Alert;
