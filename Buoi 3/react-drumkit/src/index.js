import React, { useEffect, useRef } from "react";
import "./DrumKit.css";

const sounds = {
  kick: new Audio("./assets/sound/bass-drum.mp3"),
  snare: new Audio("./assets/sound/snare.mp3"),
  hihat: new Audio("./assets/sound/hi-hat.mp3"),
  tom1: new Audio("./assets/sound/tom1.mp3"),
  tom2: new Audio("./assets/sound/tom2.mp3"),
  cymbal: new Audio("./assets/sound/cymbal.mp3"),
};

const DrumItem = ({ sound, playSound }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    playSound(sound);
    buttonRef.current.classList.add("active");
    setTimeout(() => {
      buttonRef.current.classList.remove("active");
    }, 100);
  };

  return (
    <div className="drum-item">
      <button
        className="drum-button"
        id={sound}
        onClick={handleClick}
        ref={buttonRef}
      >
        {sound.charAt(0).toUpperCase() + sound.slice(1)}
      </button>
      <img src={`./assets/picture/${sound}.jpg`} alt={sound} />
    </div>
  );
};

const DrumKit = () => {
  const playSound = (id) => {
    sounds[id].currentTime = 0;
    sounds[id].play();
  };

  useEffect(() => {
    const keyMap = {
      a: "kick",
      s: "snare",
      d: "hihat",
      f: "tom1",
      g: "tom2",
      h: "cymbal",
    };

    const handleKeyDown = (event) => {
      if (keyMap[event.key]) {
        playSound(keyMap[event.key]);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="drum-kit">
      {Object.keys(sounds).map((sound, index) => (
        <DrumItem key={index} sound={sound} playSound={playSound} />
      ))}
    </div>
  );
};

export default DrumKit;
