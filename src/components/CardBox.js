import "../styles/App.css";
import React from "react";
import Card from "./Card";
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

const CardBox = (props) => {
  return (
    <div id="CardBox">
      <Card title="card1" icon={faFutbol} color="#d4f0f0" click={props.click} />
      <Card
        title="card2"
        icon={faFootball}
        color="#d4f0f0"
        click={props.click}
      />
      <Card
        title="card3"
        icon={faBaseball}
        color="#8fcaca"
        click={props.click}
      />
      <Card
        title="card4"
        icon={faGolfBall}
        color="#8fcaca"
        click={props.click}
      />
      <Card
        title="card5"
        icon={faHockeyPuck}
        color="#cce2cb"
        click={props.click}
      />
      <Card
        title="card6"
        icon={faBasketball}
        color="#cce2cb"
        click={props.click}
      />
      <Card
        title="card7"
        icon={faBroomBall}
        color="#ffc5bf"
        click={props.click}
      />
      <Card
        title="card8"
        icon={faTableTennis}
        color="#ffc5bf"
        click={props.click}
      />
      <Card
        title="card9"
        icon={faBowlingBall}
        color="#ffd8be"
        click={props.click}
      />
      <Card
        title="card10"
        icon={faVolleyball}
        color="#ffd8be"
        click={props.click}
      />
      <Card
        title="card11"
        icon={faBicycle}
        color="#fee1e8"
        click={props.click}
      />
      <Card
        title="card12"
        icon={faDumbbell}
        color="#fee1e8"
        click={props.click}
      />
    </div>
  );
};

export default CardBox;
