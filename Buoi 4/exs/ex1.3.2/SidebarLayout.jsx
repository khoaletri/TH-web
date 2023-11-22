import React from "react";
import "./SidebarLayout.css";

const SidebarLayout = ({ sidebar, content }) => {
  return (
    <div className="SidebarLayout">
      <div className="sidebar">{sidebar}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default SidebarLayout;
