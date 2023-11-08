import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#abilities">Abilities</a>
        </li>
        <li>
          <a href="#video-section">Video</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
