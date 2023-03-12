import React from "react";
import { slide as Menu } from "react-burger-menu";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <>
      <div className="full-navbar">
        <NavLinks />
      </div>
      <div className="burger-menu-container">
        <Menu>
          <NavLinks />
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
