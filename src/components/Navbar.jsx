import React from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="home" smooth={true}>
            {" "}
            <SiCoffeescript size={25} />{" "}
          </Link>
        </li>
        <li>
          <Link to="quality" smooth={true}>
            Quality
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="news" smooth={true}>
            News
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
