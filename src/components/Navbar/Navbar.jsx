import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">"Logo"</div>
      <ul className="app__navbar-links">
        <li className="p__opensans">Mule</li>
        <li className="p__opensans">Item</li>
      </ul>
    </nav>
  );
};

export default Navbar;
