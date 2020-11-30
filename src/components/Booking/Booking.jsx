import React from "react";
import "./Booking.css";
import { format } from "date-fns";

function Booking({ data }) {
  return (
    <div className="booking">
      <div className="booking__info">
        <h3>Date & Time</h3>
        <span>
          {data &&
            format(new Date(data?.datetime), "EEEE, LLL dd yyyy 'at' hh: mm a")}
        </span>
        <p>{data?.price === 0 ? "Free" : `₹ ${data?.price}`}</p>
      </div>
      <button className="booking_btnbook">Book Now</button>
      <button className="booking_btnshare">Promote Program</button>
      <span>No Refunds</span>
    </div>
  );
}

export default Booking;
