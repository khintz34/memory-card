import React from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: props.color }}
      onClick={() => {
        props.click(props.title);
      }}
    >
      <p style={{ backgroundColor: props.color }}>
        <FontAwesomeIcon
          icon={props.icon}
          className="icons"
          style={{ backgroundColor: props.color }}
        />
      </p>
    </div>
  );
};

export default Card;
