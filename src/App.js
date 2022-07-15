import "../src/styles/App.css";
import ScoreBoard from "./components/ScoreBoard";
import Title from "./components/Title";
import CardBox from "./components/CardBox";
import React, { useEffect, useState } from "react";
import {
  faFutbol,
  faFootball,
  faBaseball,
  faBasketball,
  faHockeyPuck,
  faTableTennis,
  faVolleyball,
  faGolfBall,
  faBroomBall,
  faBowlingBall,
  faBicycle,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";

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

  const [orderedArray, setOrderedArray] = useState([
    { title: "card1", icon: faFutbol, color: "#d4f0f0" },
    { title: "card2", icon: faFootball, color: "#d4f0f0" },
    { title: "card3", icon: faBaseball, color: "#8fcaca" },
    { title: "card4", icon: faGolfBall, color: "#8fcaca" },
    { title: "card5", icon: faHockeyPuck, color: "#cce2cb" },
    { title: "card6", icon: faBasketball, color: "#cce2cb" },
    { title: "card7", icon: faBroomBall, color: "#ffc5bf" },
    { title: "card8", icon: faTableTennis, color: "#ffc5bf" },
    { title: "card9", icon: faBowlingBall, color: "#ffd8be" },
    { title: "card10", icon: faVolleyball, color: "#ffd8be" },
    { title: "card11", icon: faBicycle, color: "#fee1e8" },
    { title: "card12", icon: faDumbbell, color: "#fee1e8" },
  ]);

  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(() => {
    return localStorage.getItem("highScore") || 0;
  });

  const [list, setList] = useState(resetList);

  const buttonClick = (title) => {
    let rules = document.querySelector("#rules");
    if (list[title] === false) {
      setList({ ...list, [title]: true });
      setCurrentScore(currentScore + 1);
      shuffleArray(orderedArray);
      rules.style.animation = "";
      rules.style.color = "black";
    } else {
      setCurrentScore(0);
      setList(resetList);
      rules.style.animation = "wiggle 2s";
      rules.style.color = "red";
    }
  };

  useEffect(() => {
    let scoreDiv = document.querySelector(".highScore");
    if (currentScore >= highScore && currentScore > 0) {
      setHighScore(currentScore);
      scoreDiv.classList.add("highlights");
    } else {
      scoreDiv.classList.remove("highlights");
    }
  }, [list]);

  useEffect(() => {
    localStorage.setItem("highScore", highScore);
  }, [highScore]);

  const shuffleArray = () => {
    setOrderedArray([...orderedArray].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <Title />
      <p id="rules">Its Simple: Don't click the same card twice!</p>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardBox click={buttonClick} orderedArray={orderedArray} />
    </div>
  );
}

export default App;
