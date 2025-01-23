import React, { useState } from "react";
import { Menu } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <h1 className="navbar-title">Saugnik Aich</h1>
          <button
            className="navbar-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#about" className="navbar-link" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#experience" className="navbar-link" onClick={closeMobileMenu}>
            Experience
          </a>
          <a href="#projects" className="navbar-link" onClick={closeMobileMenu}>
            Projects
          </a>
          <a href="#skills" className="navbar-link" onClick={closeMobileMenu}>
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
