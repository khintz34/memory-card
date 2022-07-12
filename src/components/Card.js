import React from "react";
import "../styles/App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src="" alt="" />
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
