import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Emails from "./Components/Emails";

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
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
