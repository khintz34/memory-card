import React from "react";
import "../styles/App.css";

const ScoreBoard = (props) => {
  return (
    <div className="main-score">
      <div className="scoreboard">
        <p>Current Score: </p>
        <p>{props.currentScore}</p>
      </div>
      <div className="scoreboard">
        <p>High Score: </p>
        <p>{props.highScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
