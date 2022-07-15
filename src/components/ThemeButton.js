import "../styles/App.css";
import React from "react";

const ThemeBtn = (props) => {
  return (
    <button className={props.class} onClick={props.click} type="button">
      {props.name}
    </button>
  );
};

export default ThemeBtn;
