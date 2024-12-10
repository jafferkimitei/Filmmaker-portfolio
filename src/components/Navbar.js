import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import clickSound from "../assets/click.wav";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e) => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
    setIsMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Disable scroll when menu is open
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full transition-transform duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(5px)",
        zIndex: 1000,
      }}
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-end items-center py-6 text-white text-sm uppercase tracking-widest">
        <li className="px-4">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/films" onClick={handleLinkClick}>Films</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/scripts" onClick={handleLinkClick}>Scripts</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/info" onClick={handleLinkClick}>Info</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/art" onClick={handleLinkClick}>Art</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/photos" onClick={handleLinkClick}>Photos</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center py-6 px-4">
        {/* Hamburger / Close Icon */}
        <button
          onClick={handleHamburgerClick}
          className="text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu links with fade-in and fade-out */}
      <div
        className={`md:hidden flex flex-col items-center justify-center bg-black text-white py-4 transition-opacity duration-500 fixed top-0 left-0 w-full h-screen ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundImage: "linear-gradient(135deg, #1e1e1e, #000)",
          zIndex: 2000,
        }}
      >
         <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 left-4 w-8 h-8 flex items-center justify-center bg-transparent text-white text-3xl hover:text-gray-300 transition duration-300"
          aria-label="Close menu"
        >
          &times; 
        </button>
        <Link to="/" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Home</Link>
        <Link to="/films" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Films</Link>
        <Link to="/scripts" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Scripts</Link>
        <Link to="/info" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Info</Link>
        <Link to="/art" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Art</Link>
        <Link to="/photos" onClick={handleLinkClick} className="py-4 text-2xl font-futura">Photos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
