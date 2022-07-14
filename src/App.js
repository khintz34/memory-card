import "../src/styles/App.css";
import ScoreBoard from "./components/ScoreBoard";
import Title from "./components/Title";
import CardBox from "./components/CardBox";
import React, { useEffect, useState } from "react";

function App() {
  const resetList = {
    card1: false,
    card2: false,
    card3: false,
    card4: false,
    card5: false,
    card6: false,
    card7: false,
    card8: false,
    card9: false,
    card10: false,
    card11: false,
    card12: false,
  };
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return localStorage.getItem("highScore") || 0;
  });
  const [list, setList] = useState(resetList);

  const buttonClick = (title) => {
    if (list[title] === false) {
      setList({ ...list, [title]: true });
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
      setList(resetList);
    }
  };

  useEffect(() => {
    if (currentScore >= highScore) {
      setHighScore(currentScore);
    }
  }, [list]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore);
  }, [highScore]);

  return (
    <div className="App">
      <Title />
      <p>Its Simple: Don't click the same card twice!</p>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardBox click={buttonClick} />
    </div>
  );
}

export default App;
