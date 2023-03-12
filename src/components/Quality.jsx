import React from "react";
import { GiCoffeeBeans, GiCoffeeCup } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";

function Quality() {
  return (
    <section id="quality">
      <div className="quality-container">
        <div className="benefits">
          <span>Some benefits</span>
          <h1>Only Quality Coffee Beans</h1>
          <div className="benefits-card">
            <GiCoffeeBeans size={35} color={"rgb(248, 193, 126)"} className="quality-icons"/>
            <div>
              <h2>Great Coffee Beans</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quisquam nostrum architecto.
              </span>
            </div>
          </div>
          <div className="benefits-card">
            <GiCoffeeCup size={35} color={"rgb(248, 193, 126)"} className="quality-icons"/>
            <div>
              <h2>Best Coffee Flavor</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quisquam nostrum architecto.
              </span>
            </div>
          </div>
          <div className="benefits-card">
            <MdCoffeeMaker size={35} color={"rgb(248, 193, 126)"} className="quality-icons"/>
            <div>
              <h2>Incredible Mixing</h2>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quisquam nostrum architecto.
              </span>
            </div>
          </div>
        </div>
        <div className="moments">
          <h1>Coffee Moments</h1>
          <span>BUY ONE GET TWO</span>
        </div>
      </div>
      <div className="quote">
        <ImQuotesLeft size={50} color={"rgb(248, 193, 126)"} />
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          consectetur officiis nobis maxime recusandae laboriosam, quaerat
          repudiandae esse consequatur doloremque quo pariatur repellat
          provident sapiente laudantium? Vel quam ab reprehenderit."
        </p>
        <span>Carlos Vieira</span>
      </div>
    </section>
  );
}

export default Quality;
