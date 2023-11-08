import { useRef, useEffect } from "react";
import "./App.css";

const noteMap = {
  Q: "C4",
  W: "Db4",
  E: "Eb4",
  A: "F4",
  S: "Gb4",
  D: "Ab4",
  Z: "Bb4",
  R: "C5",
  T: "Db5",
  Y: "Eb5",
  F: "F5",
  G: "Gb5",
  H: "Ab5",
  J: "Bb5",
  U: "C6",
  I: "Db6",
  O: "Eb6",
  V: "F6",
  B: "Gb6",
  N: "Ab6",
  M: "Bb6",
};

function App() {
  const audioRef = useRef(null);

  function playSound(soundName) {
    const sound = require(`./sounds/${soundName}.mp3`);
    const audioElement = audioRef.current;
    audioElement.src = sound;
    audioElement.play();
  }

  function handleKeyDown(e) {
    const noteName = noteMap[e.key.toUpperCase()];
    if (noteName) {
      const keyElement = document.querySelector(
        `.key[data-note="${noteName}"]`
      );
      keyElement.classList.add("playing");
      playSound(noteName);
    }
  }

  function handleKeyUp(e) {
    const noteName = noteMap[e.key.toUpperCase()];
    if (noteName) {
      const keyElement = document.querySelector(
        `.key[data-note="${noteName}"]`
      );
      keyElement.classList.remove("playing");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div id="piano">
      <div className="keys">
        <div
          className="key"
          data-note="C4"
          onMouseDown={() => playSound("C4")}
        ></div>
        <div
          className="key black--key"
          data-note="Db4"
          onMouseDown={() => playSound("Db4")}
        ></div>
        <div
          className="key black--key"
          data-note="Eb4"
          onMouseDown={() => playSound("Eb4")}
        ></div>
        <div
          className="key"
          data-note="F4"
          onMouseDown={() => playSound("F4")}
        ></div>
        <div
          className="key black--key"
          data-note="Gb4"
          onMouseDown={() => playSound("Gb4")}
        ></div>
        <div
          className="key black--key"
          data-note="Ab4"
          onMouseDown={() => playSound("Ab4")}
        ></div>
        <div
          className="key black--key"
          data-note="Bb4"
          onMouseDown={() => playSound("Bb4")}
        ></div>

        <div
          className="key"
          data-note="C5"
          onMouseDown={() => playSound("C5")}
        ></div>
        <div
          className="key black--key"
          data-note="Db5"
          onMouseDown={() => playSound("Db5")}
        ></div>
        <div
          className="key black--key"
          data-note="Eb5"
          onMouseDown={() => playSound("Eb5")}
        ></div>
        <div
          className="key"
          data-note="F5"
          onMouseDown={() => playSound("F5")}
        ></div>
        <div
          className="key black--key"
          data-note="Gb5"
          onMouseDown={() => playSound("Gb5")}
        ></div>
        <div
          className="key black--key"
          data-note="Ab5"
          onMouseDown={() => playSound("Ab5")}
        ></div>
        <div
          className="key black--key"
          data-note="Bb5"
          onMouseDown={() => playSound("Bb5")}
        ></div>

        <div
          className="key"
          data-note="C6"
          onMouseDown={() => playSound("C6")}
        ></div>
        <div
          className="key black--key"
          data-note="Db6"
          onMouseDown={() => playSound("Db6")}
        ></div>
        <div
          className="key black--key"
          data-note="Eb6"
          onMouseDown={() => playSound("Eb6")}
        ></div>
        <div
          className="key"
          data-note="F6"
          onMouseDown={() => playSound("F6")}
        ></div>
        <div
          className="key black--key"
          data-note="Gb6"
          onMouseDown={() => playSound("Gb6")}
        ></div>
        <div
          className="key black--key"
          data-note="Ab6"
          onMouseDown={() => playSound("Ab6")}
        ></div>
        <div
          className="key black--key"
          data-note="Bb6"
          onMouseDown={() => playSound("Bb6")}
        ></div>
      </div>
      <audio ref={audioRef} />
    </div>
  );
}

export default App;
