import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.scss";

const React4 = () => {
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("dog");
  const [url, setUrl] = useState();

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const changeURL = () => {
    setUrl(`https://loremflickr.com/320/240/${type}`);
  };

  const changeType = () => {
    setType((prevType) => (prevType === "dog" ? "cat" : "dog"));
  };

  useEffect(() => {
    console.log("change url");
    changeURL();
  }, [type]);

  return (
    <div className="react4">
      <div className="result">{counter}</div>
      <Button onClick={increaseCounter} size="lg">
        Click
      </Button>
      <hr />
      <Button onClick={changeType} size="lg">
        Change
      </Button>
      <br />
      {url && <img src={url} alt="" />}
    </div>
  );
};

export default React4;
