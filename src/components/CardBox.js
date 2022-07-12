import "../styles/App.css";
import React from "react";
import Card from "./Card";

const CardBox = () => {
  return (
    <div id="CardBox">
      <Card title="Soccer" />
      <Card title="Football" />
      <Card title="Baseball" />
      <Card title="Golf" />
      <Card title="Hockey" />
      <Card title="Basketball" />
      <Card title="Rugby" />
      <Card title="Tennis" />
      <Card title="Pickleball" />
      <Card title="Volleyball" />
      <Card title="Curling" />
      <Card title="Water Polo" />
    </div>
  );
};

export default CardBox;
