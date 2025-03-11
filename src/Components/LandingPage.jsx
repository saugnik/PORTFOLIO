import React from "react";
import profilePic from "./1000148477.jpg"; 
const LandingPage = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <img 
        src={profilePic} 
        alt="Saugnik Aich" 
        className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-lg"
      />
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-6">I'm Saugnik Aich, an Electrical Engineer & AI/ML Enthusiast.</p>
        <button 
          onClick={onEnter} 
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
