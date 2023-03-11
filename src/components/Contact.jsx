import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div>
        <div>
          <h1>Working Hours</h1>
          <span>Mon - Fri: 9:00am - 10:00pm</span>
        </div>
        <div>
          <h1>Need a Table?</h1>
          <span>{"(415) 998-99XX"} or</span>
          <input type="date" name="booking" id="booking" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
