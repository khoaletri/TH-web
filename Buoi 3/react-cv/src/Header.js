import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="background-container">
        <img
          src="https://www.thepinknews.com/wp-content/uploads/2019/06/billy-herrington.jpg?w=768&h=416&crop=1.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
      </div>
      <h1>Lê Trí Khoa</h1>
      <p>Computer Science Student from Vietnam</p>
    </header>
  );
};

export default Header;
