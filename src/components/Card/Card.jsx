import React from "react";
import "./Card.css";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import CloudOffIcon from "@material-ui/icons/CloudOff";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import { format } from "date-fns";
import { imgPath } from "../../api";

function Card({ data }) {
  const history = useHistory();
  const handleClick = (id) => {
    history.push("/event/" + id);
  };

  return (
    <div onClick={() => handleClick(data?.id)} className="card">
      <div className="card__head">
        <div className="card__icons">
          <IconButton className="card__icon">
            <span>{data?.price === 0 ? "Free" : `₹${data?.price}`}</span>
          </IconButton>
          <IconButton className="card__icon">
            {data?.isOnline ? <CloudQueueIcon /> : <CloudOffIcon />}
          </IconButton>
        </div>
        <img className="card_img" src={data.imgURL} alt={data.imgURL} />
      </div>
      <div className="card__body">
        <div className="card__date">
          <span>{format(new Date(data?.datetime), "EEE")}</span>
          <h3>{format(new Date(data?.datetime), "dd")}</h3>
        </div>
        <div className="card__info">
          <h3>{data.name}</h3>
          <p>
            {data.address.location}
            <br />
            {data.address.city}, {data.address.state}, {data.address.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
