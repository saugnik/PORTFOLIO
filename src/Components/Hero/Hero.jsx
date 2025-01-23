import React from 'react';
import './Hero.css';
import Diamond from './../1000148477.jpg';

const Hero = () => (
  <section className="Hero">
    <div>
      <div className="My_photo">
        <img 
          src={Diamond} 
          alt="Avatar" 
          className="Avatar"
        />
      </div>
      <div className="Name&branch">
        <h1>Saugnik Aich</h1>
        <p className="Branch">
          Electrical Engineer & Computer Science Enthusiast
        </p>
        <p className="ML-Work">
          Specializing in AIML, ROS2, SLAM, robotics. 
          Passionate about the intersection of hardware and software.
        </p>
        <div className="Contact_name">
          <a 
            href="#contact" 
            className="Contact"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
