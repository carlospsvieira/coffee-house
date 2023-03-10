import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";

function Quality() {
  return (
    <section id="quality">
      <div className="quality-container">
        <div className="benefits">
          <span>Some benefits</span>
          <h1>Only Quality Coffee Beans</h1>
          <div>
            <GiCoffeeBeans size={25} />
            <div>
              <h2>Great Coffee Beans</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quisquam nostrum architecto.
              </span>
            </div>
          </div>
        </div>
        <div>
          <h1>Coffee Moments</h1>
          <span>BUY ONE GET TWO</span>
        </div>
      </div>
    </section>
  );
}

export default Quality;
