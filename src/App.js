import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Slider from "./Components/Slider";
import LandingPage from "./Components/LandingPage";
import Contact from "./Components/Contact";
import Chatbot from "./Components/chatbot";  // Import chatbot

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  const handleEnter = () => {
    setShowLanding(false);
  };

  return (
    <div>
      {showLanding ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Slider />
          <Contact />
          <Chatbot />  {/* Add chatbot */}
        </>
      )}
    </div>
  );
};

export default App;
