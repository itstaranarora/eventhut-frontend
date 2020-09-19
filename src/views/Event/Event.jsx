import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Event.css";
import data from "../../data.json";
import { Booking, Cards, Header } from "../../components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Event() {
  const { id } = useParams();
  const [eventData, setEventData] = React.useState({});
  React.useEffect(() => {
    const fetchData = (id) => {
      setEventData(data.find((item) => item.id === Number(id)));
    };
    fetchData(id);
  }, [id]);

  return (
    <div className="event">
      <Header />
      <div
        className="event__cover"
        style={{ backgroundImage: `url(${eventData?.img})` }}
      >
        <div className="event__text">
          <Link to="/" className="event__back">
            <ArrowBackIcon />
            <span>Back</span>
          </Link>
          <div className="event__coverinfo">
            <h2>{eventData?.title}</h2>
            <span>By Taran Arora</span>
            <p>
              {eventData?.address} <br /> {eventData?.location}
            </p>
          </div>
        </div>
        <div className="event__datebox">
          <Booking data={eventData} />
        </div>
      </div>
      <div className="event__content container">
        <div className="event__description">
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            corporis exercitationem doloremque totam voluptatum est at et nisi
            assumenda corrupti amet fugiat sed maiores officia iste, incidunt
            itaque! Commodi, tenetur? corporis exercitationem doloremque totam
            exercitationem doloremque totam voluptatum est at et nisi assumenda
            corrupti amet fugiat sed maiores officia iste, incidunt itaque!
            Commodi, tenetur? corporis exercitationem doloremque totam
            voluptatum est at et nisi assumenda corrupti amet fugiat sed maiores
            officia iste, incidunt itaque! Commodi, tenetur? exercitationem
            doloremque totam voluptatum est at et nisi assumenda corrupti amet
            fugiat sed maiores officia iste, incidunt itaque! Commodi, tenetur?
            corporis exercitationem doloremque totam
            <br /> <br /> corporis exercitationem doloremque totam voluptatum
            est at et nisi assumenda corrupti amet fugiat sed maiores officia
            iste, incidunt itaque! Commodi, tenetur? corporis exercitationem
            doloremque totam voluptatum est at et nisi assumenda corrupti amet
            fugiat sed maiores officia iste, incidunt itaque! Commodi, tenetur?
          </p>
        </div>
        <div className="event__location">
          <h3>Organizer</h3>
          <img
            alt="binod"
            src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          />
          <span>Binod</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            corporis exercitationem doloremque totam voluptatum est
          </p>
        </div>
      </div>

      <div className="event__otherevents ">
        <div className="container">
          <h2>Other Events You May Like</h2>
          <Cards data={data?.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
}

export default Event;
