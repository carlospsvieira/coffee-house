import React, { useEffect, useState } from "react";

const OPEN_HOURS = [
  "What time?",
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

const formElement = "form";

function Reservation() {
  const [reservation, setReservation] = useState({ time: "What time?" });
  const [btnValidation, setBtnValidation] = useState(true);
  const [hours, setHours] = useState(OPEN_HOURS);
  const [success, setSuccess] = useState(false);

  const validateBTn = () => {
    if (
      reservation.date &&
      reservation.time !== "What time?" &&
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
      const availableHours = hours.filter((hour) => hour !== storage.time);
      setHours(availableHours);
    } else {
      setHours(OPEN_HOURS);
    }
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // set reservation to local storage //
    localStorage.setItem("reservation", JSON.stringify(reservation));

    // check for existing reservation //
    existingReservation();

    // clear form inputs at once rather than creating states for every input only to change them back to default //
    document.querySelector(formElement).reset();

    setBtnValidation(true);
    setSuccess(true);
  };

  useEffect(() => {
    validateBTn();
    existingReservation();
  }, [reservation]);

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      {success && (
        <p
          style={{
            backgroundColor: "#212121",
            padding: "0.5rem 0",
            textAlign: "center",
            color: "white",
          }}
        >
          <span style={{ color: "green", fontWeight: "600" }}>Booked!</span>{" "}
          <strong>Confirmation Code:</strong>{" "}
          {`${reservation.last}${reservation.time}${reservation.date}`.toUpperCase()}
        </p>
      )}
      <div>
        <input
          type="text"
          name="first"
          id="first"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last"
          id="last"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <div>
        <input
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
          required
        />
        {hours.length === 0 ? (
          <h2>Sorry, We're all booked up.</h2>
        ) : (
          <select name="time" id="time" onChange={handleChange} required>
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
