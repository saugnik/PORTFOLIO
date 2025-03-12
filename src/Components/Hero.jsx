import React from "react";
import Diamond from "../Components/1000148477.jpg";
import herobg from "../Components/mainpgbackground.jpg"; 

const Hero = () => (
  <section 
    className="relative flex flex-col items-center justify-center text-center py-16 px-6 text-white bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${herobg})` }}
  >
    {/* Dark Overlay for better visibility */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    <div className="relative flex flex-col items-center space-y-6">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img src={Diamond} alt="Avatar" className="w-full h-full object-cover" />
      </div>

      {/* Name & Description */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">Saugnik Aich</h1>
        <p className="text-lg text-gray-300">
          Electrical Engineer & Computer Science Enthusiast
        </p>
        <p className="mt-2 text-gray-400 max-w-lg mx-auto">
          Specializing in AIML, ROS2, SLAM, robotics. Passionate about the intersection of hardware and software.
        </p>
      </div>

      {/* Contact Button */}
      <div>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
