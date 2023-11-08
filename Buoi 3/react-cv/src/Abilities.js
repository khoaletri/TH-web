import React from "react";
import "./styles.css";
const Abilities = () => {
  return (
    <section id="abilities" className="abilities">
        <h2>Abilities</h2>
        <div class="skill">
          <label>SQL:</label>
          <div class="stars" data-rating="5">
            {" "}
          </div>
        </div>
        <div class="skill">
          <label>Javascript:</label>
          <div class="stars" data-rating="1">
            {" "}
          </div>
        </div>
        <div class="skill">
          <label>React:</label>
          <div class="stars" data-rating="3">
            {" "}
          </div>
        </div>
        <div class="skill">
          <label>Python:</label>
          <div class="stars" data-rating="4">
            {" "}
          </div>
        </div>
        <div class="skill">
          <label>English:</label>
          <div class="stars" data-rating="5">
            {" "}
          </div>
        </div>
      </section>
  );
};

export default Abilities;
