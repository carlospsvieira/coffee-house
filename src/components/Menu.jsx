import React from "react";

function Menu() {
  return (
    <section id="menu">
      <div className="menu-container">
        <div>
          <span>From Our Menu</span>
          <h1>Pick Your Favorite</h1>
        </div>
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
      </div>
    </section>
  );
}

export default Menu;
