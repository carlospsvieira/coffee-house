import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-hours">
          <h1>Working Hours</h1>
          <span>Mon - Fri: 9:00am - 10:00pm</span>
        </div>
        <div className="contact-booking">
          <h1>Need a Table?</h1>
          <input type="date" name="booking" id="booking" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
