import React from "react";
import { Cover, Filter, Cards } from "../../components";
import "./Home.css";
import useFetch from "../../hooks/useFetch";
import { events } from "../../api";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { useStateValue } from "../../states/StateProvider";

function Home() {
  const { response, loading } = useFetch(events);
  // const [{ user }, dispatch] = useStateValue();

  return (
    <div className="home">
      <Cover />
      <Filter />
      <h3 className="container home__heading">Upcomming Events</h3>
      {loading ? (
        <div className="home__loading">
          <CircularProgress size="3rem" />
        </div>
      ) : (
        <div className="container">
          <Cards data={response} />
        </div>
      )}
    </div>
  );
}

export default Home;
