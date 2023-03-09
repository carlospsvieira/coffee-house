import React from "react";
import { SiCoffeescript } from "react-icons/si";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home"> <SiCoffeescript size={25}/> </a>
        </li>
        <li>
          <a href="#quality">Quality</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
