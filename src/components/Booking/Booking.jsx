import React from "react";
import "./Booking.css";

function Booking({ data }) {
  return (
    <div className="booking">
      <div className="booking__info">
        <h3>Date & Time</h3>
        <span>
          Tuesday, {data?.month} {data?.date}, 2020 at 20:30 PM{" "}
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
