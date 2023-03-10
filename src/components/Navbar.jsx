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
          <Link to="quality" smooth={true} offset={-50}>
            Quality
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} offset={-50}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="news" smooth={true} offset={-50}>
            News
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
