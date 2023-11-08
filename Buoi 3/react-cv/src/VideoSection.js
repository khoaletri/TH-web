import React from "react";
import "./styles.css";
const VideoSection = () => {
  return (
    <section id="video-section" className="video-section">
      <h2>My Favorite Video</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JPxfAYYo7NA?si=MNPrGi8tp0RIuV39"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
