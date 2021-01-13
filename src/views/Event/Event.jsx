import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Event.css";
import { Booking, Cards, Header } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useFetch from "../../hooks/useFetch";
import { event, events } from "../../api";
import logoDark from "../../assets/Component-3.svg";
import Logo from "../../assets/Component-2.svg";
import { useStateValue } from "../../states/StateProvider";

function Event() {
  const moreEvents = useFetch(events);
  const [{ darkMode }] = useStateValue();
  const { id } = useParams();
  const { response, loading } = useFetch(event(id));
  // const [eventData, setEventData] = React.useState({});
  // React.useEffect(() => {
  //   const fetchData = (id) => {
  //     setEventData(data.find((item) => item.id === Number(id)));
  //   };
  //   fetchData(id);
  // }, [id]);

  if (loading) {
    return (
      <div className="event__loading">
        <img src={darkMode ? logoDark : Logo} alt="logo" />
      </div>
    );
  }

  return (
    <div className="event">
      <Header />
      <div
        className="event__cover"
        style={{
          backgroundImage: `url(${response?.imgURL})`,
        }}
      >
        <div className="event__layout container">
          <div className="event__text">
            <Link to="/" className="event__back">
              <ArrowBackIcon />
              <span>Back</span>
            </Link>
            <div className="event__coverinfo">
              <h2>{response?.name}</h2>
              <span>By {response?.user.name}</span>
              <p>
                {response?.address.location} <br />
                {response?.address.city}, {response?.address.state},{" "}
                {response?.address.country},
              </p>
            </div>
          </div>
          <div className="event__datebox">
            <Booking data={response} />
          </div>
        </div>
      </div>
      <div className="event__content container">
        <div className="event__description">
          <h3>Description</h3>
          <p>{response?.description}</p>
        </div>
        <div className="event__location">
          <div className="event__mobile">
            <Booking data={response} />
          </div>
          <h3>Organizer</h3>
          <img
            alt="binod"
            src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <span>{response?.user.username}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            corporis exercitationem doloremque totam voluptatum est
          </p>
        </div>
      </div>

      <div className="event__otherevents ">
        <div className="container">
          <h2>Other Events You May Like</h2>
          <Cards data={moreEvents.response?.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
}

export default Event;
