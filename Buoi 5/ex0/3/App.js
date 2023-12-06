import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./style.scss";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div class="container">
      <div className="result">{counter}</div>
      <Button onClick={increaseCounter} size="lg">
        Click
      </Button>
    </div>
  );
};

export default App;
