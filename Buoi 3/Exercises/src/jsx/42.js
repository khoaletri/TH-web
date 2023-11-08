import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "antd/dist/reset.css";

function handleButtonClick() {
  alert("Alert!!!");
}

const element = (
  <Button
    style={{ margin: "10px 10px" }}
    type="primary"
    onClick={handleButtonClick} 
  >
    Alert me!
  </Button>
);

ReactDOM.render(element, document.getElementById("root"));
