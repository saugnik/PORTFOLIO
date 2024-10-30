import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Experience from './Components/Experience/Experience';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


const App = () => {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <Hero/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
};

export default App;