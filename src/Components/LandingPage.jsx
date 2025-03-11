import React from "react";
import profilePic from "./1000148477.jpg"; 
import { motion } from "framer-motion";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.img 
        src={profilePic} 
        alt="Saugnik Aich" 
        className="w-48 h-48 rounded-full mb-6 border-4 border-blue-500 shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div 
        className="text-center p-8"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-blue-400 tracking-wide drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-6 text-gray-300 max-w-lg mx-auto">
          I'm <span className="font-semibold text-white">Saugnik Aich</span>, an Electrical Engineer & AI/ML Enthusiast.
        </p>
        <motion.button 
          onClick={onEnter} 
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
