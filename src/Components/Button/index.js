import React from "react";

import "./index.css";

function defaultfunc() {}

export default function(props) {
  return (
    <div className="btn" onClick={props.onClick || defaultfunc}>
      {props.text || "new text"}
    </div>
  );
}
