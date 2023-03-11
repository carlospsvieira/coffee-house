import React, { useState } from "react";

function Reservation() {
  const [hours, setHours] = useState([
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
    "8:00pm",
    "9:00pm",
  ]);

  return (
    <form className="reservation-form">
      <div>
        <input type="text" name="first" id="first" placeholder="First Name" />
        <input type="text" name="last" id="last" placeholder="Last Name" />
      </div>
      <input type="email" name="email" id="email" placeholder="Email" />
      <input type="date" name="date" id="date" />
      {hours.length === 0 ? (
        <h2>Sorry, We're all booked up.</h2>
      ) : (
        <select name="time" id="time">
          {hours.map((hour, index) => (
            <option value={hour} key={index}>
              {hour}
            </option>
          ))}
        </select>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Reservation;
