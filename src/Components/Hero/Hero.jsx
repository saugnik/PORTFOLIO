import React from 'react';
import './Hero.css'

const Hero = () => (
  <section className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Saugnik Aich</h1>
        <p className="text-xl text-gray-600 mb-8">
          Electrical Engineer & Computer Science Enthusiast
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Specializing in embedded systems, FPGA/ASIC design, and robotics. 
          Passionate about the intersection of hardware and software.
        </p>
        <div className="mt-8">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;