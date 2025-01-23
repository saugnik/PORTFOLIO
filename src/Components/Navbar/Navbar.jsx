import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="body">
      <div className="Box">
        <div className="Buttom">
          <h1 className="Name">Saugnik Aich</h1>
          

          {/* Mobile Menu Toggle Button */}
          <button className="hidden_tab" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="Dropdown">
            <a href="#about" className="About_Navbar">About</a>
            <a href="#experience" className="Experience_Navbar">Experience</a>
            <a href="#projects" className="Projects_Navbar">Projects</a>
            <a href="#skills" className="Skills_Navbar">Skills</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
