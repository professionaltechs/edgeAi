import React from "react";

// STYLING
import "../../styles/layout/navbar.css";

// ICONS
import { IoSearch } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbarMain">
      <div className="navbarInputContainer">
        <IoSearch className="navbarSearchIcon" />
        <input
          placeholder="Search here..."
          className="navbarInput"
          type="text"
        />
      </div>
      <div className="navbarFunctionalButtonContainer">
        <button className="navbarFunctionalButton">Fractional</button>
        <FaCaretDown />
      </div>
    </div>
  );
};

export default Navbar;
