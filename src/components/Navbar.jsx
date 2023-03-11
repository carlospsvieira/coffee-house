import React from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <span style={{color: "white"}}>
            {" "}
            <SiCoffeescript size={35} />{" "}
          </span>
        </li>
        <li>
          <Link to="quality" smooth={true} offset={-50}>
            Quality
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true}>
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
