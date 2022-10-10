import React from "react";

export const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message || "Loading..."}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading...",
};
