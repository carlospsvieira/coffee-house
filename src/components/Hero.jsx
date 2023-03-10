import React from "react";
import { MdCoffee } from "react-icons/md";
import { GiCoffeeMug } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";

function Hero() {
  return (
    <section id="home">
      <div className="hero">
        <h1>Coffee House</h1>
        <p>THE AROMA</p>
        <a href="#contact">Book Now!</a>
      </div>
      <div className="hero-cards">
        <div className="card">
          <MdCoffee size={100} />
          <span>Great Americano</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <a href="#menu">See Menu</a>
        </div>
        <div className="card">
          <SiBuymeacoffee size={90} />
          <span style={{marginTop: "0.5rem"}}>Delicious Latte</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <a href="#menu">See Menu</a>
        </div>
        <div className="card">
          <GiCoffeeMug size={100} />
          <span>Best Mocha</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <a href="#menu">See Menu</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
