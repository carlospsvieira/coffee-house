import React from "react";
import Reservation from "./Reservation";

function Contact() {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-hours">
          <h1>Working Hours</h1>
          <span>Mon - Fri: 9:00am - 10:00pm</span>
        </div>
        <div className="contact-booking">
          <h1>Need a Table?</h1>
          <Reservation />
        </div>
      </div>
    </section>
  );
}

export default Contact;
