import React, { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { Context } from "../context/AddProvider";
import NavLinks from "./NavLinks";

function Navbar() {
  const { menuOpen, setMenuOpen } = useContext(Context);

  return (
    <>
      <div className="full-navbar">
        <NavLinks />
      </div>
      <div className="burger-menu-container">
        <Menu isOpen={menuOpen} onStateChange={(e) => setMenuOpen(e.isOpen) }>
          <NavLinks />
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
