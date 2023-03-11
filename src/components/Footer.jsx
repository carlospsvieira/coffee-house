import React from "react";
import {
  TbCopyright,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandLinkedin,
} from "react-icons/tb";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1>Coffee House</h1>
        <div className="socials-container">
          <h2>Socials</h2>
          <div className="socials">
            <TbBrandFacebook />
            <TbBrandInstagram />
            <TbBrandLinkedin />
            <TbBrandTwitter />
          </div>
        </div>
        <span>
          <TbCopyright /> All rights reserved, 2023.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
