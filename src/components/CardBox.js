import "../styles/App.css";
import React from "react";
import Card from "./Card";

const CardBox = (props) => {
  //   console.log(props.orderedArray);
  let itemArray = props.orderedArray.map((index, i) => {
    return (
      <Card
        title={index.title}
        icon={index.icon}
        color={index.color}
        click={props.click}
        key={`cards-${i}`}
      />
    );
  });

  return <div id="CardBox">{itemArray}</div>;
};

export default CardBox;
