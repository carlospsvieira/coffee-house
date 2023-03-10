import React from "react";

function Menu() {
  return (
    <section id="menu">
      <div className="menu-container">
          <h1>Pick Your Favorite</h1>
          <span>From Our Menu</span>
        <div className="menu-card">
          <div className="menu-picture" />
          <div className="pricing">
            <div>
              <span>Espresso</span>
              <span>Classic Latte</span>
              <span>Americano</span>
              <span>Mocha</span>
              <span>Cappuccino</span>
              <span>Frappe</span>
            </div>
            <div>
              <span> - </span>
              <span> - </span>
              <span> - </span>
              <span> - </span>
              <span> - </span>
              <span> - </span>
            </div>
            <div className="dollar">
              <span>$2</span>
              <span>$3</span>
              <span>$4</span>
              <span>$3</span>
              <span>$4</span>
              <span>$4</span>
            </div>
          </div>
        </div>
        <div className="stats-container">
          <div className="stats">
            <span style={{fontSize: "3rem", color: "rgb(248, 193, 126)"}}>200+</span>
            <span>Clients Every Day</span>
          </div>
          <div className="stats">
            <span style={{fontSize: "3rem", color: "rgb(248, 193, 126)"}}>180+</span>
            <span>Great Memories</span>
          </div>
          <div className="stats">
            <span style={{fontSize: "3rem", color: "rgb(248, 193, 126)"}}>350+</span>
            <span>Cups of Coffee Daily</span>
          </div>
          <div className="stats">
            <span style={{fontSize: "3rem", color: "rgb(248, 193, 126)"}}>20+</span>
            <span>Types of Coffee</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
