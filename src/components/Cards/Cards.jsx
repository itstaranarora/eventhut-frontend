import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards({ data }) {
  return (
    <div className="cards">
      {data?.map((e) => (
        <Card data={e} key={e.id} />
      ))}
    </div>
  );
}

export default Cards;
