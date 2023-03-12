import React, { useEffect, useState } from "react";

const OPEN_HOURS = [
  "When?",
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
];

function Reservation() {
  const [reservation, setReservation] = useState({ time: "When?" });
  const [btnValidation, setBtnValidation] = useState(true);
  const [hours, setHours] = useState(OPEN_HOURS);

  console.log(reservation);

  const validateBTn = () => {
    if (
      reservation.date &&
      reservation.time !== "When?" &&
      reservation.email &&
      reservation.first &&
      reservation.last
    )
      setBtnValidation(false);
  };

  const existingReservation = () => {
    const storage = JSON.parse(localStorage.getItem("reservation"));

    if (!storage) return;

    if (reservation.date === storage.date) {
      const availableTime = hours.filter((hour) => hour !== storage.time);
      setHours(availableTime);
    } else {
      setHours(OPEN_HOURS);
    }
  };

  // const handleFirstName = ({ target }) => {
  //   const { value } = target;
  //   setReservation((prev) => ({ ...prev, first: value }));
  // };

  // const handleLastName = ({ target }) => {
  //   const { value } = target;
  //   setReservation((prev) => ({ ...prev, date: value }));
  // };

  // const handleDate = ({ target }) => {
  //   const { value } = target;
  //   setReservation((prev) => ({ ...prev, date: value }));
  // };

  // const handleTime = ({ target }) => {
  //   const { value } = target;
  //   setReservation((prev) => ({ ...prev, time: value }));
  // };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    // switch (name) {
    //   case "first":
    //     setReservation((prev) => ({ ...prev, first: value }));
    //     break;
    //   case "last":
    //     setReservation((prev) => ({ ...prev, last: value }));
    //     break;
    //   case "email":
    //     setReservation((prev) => ({ ...prev, email: value }));
    //     break;
    //   case "date":
    //     setReservation((prev) => ({ ...prev, date: value }));
    //     break;
    //   case "time":
    //     setReservation((prev) => ({ ...prev, time: value }));
    //   default:
    //     return;
    // }

    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("reservation", JSON.stringify(reservation));
    existingReservation();
  };

  useEffect(() => {
    validateBTn();
    existingReservation();
  }, [reservation]);

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="first"
          id="first"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="last"
          id="last"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <div>
        <input type="date" name="date" id="date" onChange={handleChange} />
        {hours.length === 0 ? (
          <h2>Sorry, We're all booked up.</h2>
        ) : (
          <select name="time" id="time" onChange={handleChange}>
            {hours.map((hour, index) => (
              <option value={hour} key={index}>
                {hour}
              </option>
            ))}
          </select>
        )}
      </div>
      <button type="submit" disabled={btnValidation}>
        Submit
      </button>
    </form>
  );
}

export default Reservation;
