import React from 'react';
import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
    <div className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Saugnik Aich</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;