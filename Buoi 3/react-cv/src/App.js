import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Abilities from "./Abilities";
import VideoSection from "./VideoSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Experiences />
      <Abilities />
      <VideoSection />
    </div>
  );
};

export default App;
