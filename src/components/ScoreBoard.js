import React from "react";
import "../styles/App.css";

const ScoreBoard = () => {
  return (
    <div className="main-score">
      <div className="scoreboard">
        <p>Current Score: </p>
        <p>XX</p>
      </div>
      <div className="scoreboard">
        <p>High Score: </p>
        <p>YY</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
