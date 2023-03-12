import React, { useContext } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import { Context } from "../context/AddProvider";

function NavLinks() {
  const { setMenuOpen } = useContext(Context);

  const handleMenuOpen = () => {
    setMenuOpen(false)
  };

  return (
    <nav>
      <ul>
        <li>
          <span style={{ color: "white" }}>
            {" "}
            <SiCoffeescript size={35} />{" "}
          </span>
        </li>
        <li>
          <Link
            to="quality"
            smooth={true}
            offset={-50}
            onClick={handleMenuOpen}
          >
            Quality
          </Link>
        </li>
        <li>
          <Link to="menu" smooth={true} onClick={handleMenuOpen}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="news" smooth={true} offset={-50} className="news-link">
            News
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            onClick={handleMenuOpen}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
