import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import CloudOffIcon from "@material-ui/icons/CloudOff";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

function Card({ data }) {
  const history = useHistory();
  const handleClick = (id) => {
    history.push("/event/" + id);
  };

  return (
    <div onClick={() => handleClick(data.id)} className="card">
      <div className="card__head">
        <div className="card__icons">
          <IconButton className="card__icon">
            <span>{data?.price === 0 ? "Free" : `₹${data?.price}`}</span>
          </IconButton>
          <IconButton className="card__icon">
            {data.type === "online" ? <CloudQueueIcon /> : <CloudOffIcon />}
          </IconButton>
        </div>
        <img className="card_img" src={data.img} alt={data.title} />
      </div>
      <div className="card__body">
        <div className="card__date">
          <span>{data.month}</span>
          <h3>{data.date}</h3>
        </div>
        <div className="card__info">
          <h3>{data.title}</h3>
          <p>
            {data.address} <br /> {data.location}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
