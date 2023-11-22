import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.PNG";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/shop">
            SHOP
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
