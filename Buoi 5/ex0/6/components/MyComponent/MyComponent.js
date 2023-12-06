import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./style.scss";

const MyComponent = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="my-component">
      <div className="title">title</div>
      <button onClick={context.toggleTheme}>Click</button>
    </div>
  );
};

export default MyComponent;
