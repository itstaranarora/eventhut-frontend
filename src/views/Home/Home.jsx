import React from "react";
import { Cover, Filter, Cards } from "../../components";
import "./Home.css";
import data from "../../data.json";

function Home() {
  const [datas, setData] = React.useState(data);
  return (
    <div className="home">
      <Cover />
      <Filter />
      <h3 className="container home__heading">Upcomming Events</h3>
      <Cards data={datas} />
    </div>
  );
}

export default Home;
