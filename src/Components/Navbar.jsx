import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-md relative">
      <div className="container mx-auto max-w-7xl flex justify-between items-center px-6">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">Saugnik Aich</h1>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#slider" className="hover:text-blue-400 transition">Slider</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 py-4 flex flex-col items-center space-y-4 lg:hidden">
          <a href="#about" className="hover:text-blue-400 transition" onClick={closeMobileMenu}>About</a>
          <a href="#experience" className="hover:text-blue-400 transition" onClick={closeMobileMenu}>Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition" onClick={closeMobileMenu}>Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition" onClick={closeMobileMenu}>Skills</a>
          <a href="#slider" className="hover:text-blue-400 transition" onClick={closeMobileMenu}>Slider</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
