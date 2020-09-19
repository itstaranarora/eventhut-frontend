import React from "react";
import { Cover, Filter, Cards } from "../../components";
import "./Home.css";
import data from "../../data.json";

function Home() {
  return (
    <div className="home">
      <Cover />
      <Filter />
      <h3 className="container home__heading">Upcomming Events</h3>
      <Cards data={data} />
    </div>
  );
}

export default Home;
