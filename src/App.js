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
  faCow,
  faDog,
  faHippo,
  faOtter,
  faBugs,
  faCat,
  faCrow,
  faDove,
  faFish,
  faFrog,
  faHorse,
  faKiwiBird,
  faLeaf,
  faTree,
  faClover,
  faFeather,
  faFire,
  faIcicles,
  faMountain,
  faPersonHiking,
  faVolcano,
  faWater,
  faWind,
  faSignsPost,
} from "@fortawesome/free-solid-svg-icons";
import ThemeBtn from "./components/ThemeButton";

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

  const sportsList = [
    faFutbol,
    faFootball,
    faBaseball,
    faGolfBall,
    faHockeyPuck,
    faBasketball,
    faBroomBall,
    faTableTennis,
    faBowlingBall,
    faVolleyball,
    faBicycle,
    faDumbbell,
  ];

  const natureList = [
    faLeaf,
    faTree,
    faClover,
    faFeather,
    faFire,
    faIcicles,
    faMountain,
    faPersonHiking,
    faVolcano,
    faWater,
    faWind,
    faSignsPost,
  ];

  const animalList = [
    faCow,
    faDog,
    faHippo,
    faOtter,
    faBugs,
    faCat,
    faCrow,
    faDove,
    faFish,
    faFrog,
    faHorse,
    faKiwiBird,
  ];

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

  const themeClick = (theme) => {
    let themeArray = [];
    const Nature = document.querySelector("#Nature");
    const Animals = document.querySelector("#Animals");
    const Sports = document.querySelector("#Sports");
    if (theme === "Sports") {
      themeArray = sportsList;
      Sports.classList.add("checked");
      Animals.classList.remove("checked");
      Nature.classList.remove("checked");
    } else if (theme === "Animals") {
      themeArray = animalList;
      Animals.classList.add("checked");
      Sports.classList.remove("checked");
      Nature.classList.remove("checked");
    } else {
      themeArray = natureList;
      Nature.classList.add("checked");
      Sports.classList.remove("checked");
      Animals.classList.remove("checked");
    }

    let newOrderArray = orderedArray;

    for (let i = 0; i <= 11; i++) {
      newOrderArray[i].icon = themeArray[i];
    }

    setOrderedArray(themeArray);

    resetAll();
  };

  const resetAll = () => {
    shuffleArray(orderedArray);
    setCurrentScore(0);
    setList(resetList);
  };

  useEffect(() => {
    let rules = document.querySelector("#rules");
    if (currentScore === 12) {
      rules.textContent = "CONGRATS, YOU WIN!!!";
      rules.style.animation = "wiggle 2s";
      resetAll();
    } else {
      rules.textContent = "Its Simple: Don't click the same card twice!";
    }
  }, [currentScore]);

  return (
    <div className="App">
      <Title />
      <div id="headerDiv">
        <p id="rules">Its Simple: Don't click the same card twice!</p>
        <div id="themeDiv">
          <ThemeBtn
            id="Sports"
            class="themeBtn checked"
            name="Sports"
            click={() => {
              themeClick("Sports");
            }}
          />
          <ThemeBtn
            id="Animals"
            class="themeBtn"
            name="Animals"
            click={() => {
              themeClick("Animals");
            }}
          />
          <ThemeBtn
            id="Nature"
            class="themeBtn"
            name="Nature"
            click={() => {
              themeClick("Nature");
            }}
          />
        </div>
      </div>
      <ScoreBoard currentScore={currentScore} highScore={highScore} />
      <CardBox click={buttonClick} orderedArray={orderedArray} />
    </div>
  );
}

export default App;
