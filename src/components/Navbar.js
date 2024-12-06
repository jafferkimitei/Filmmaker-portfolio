import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clickSound from "../assets/click.wav";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling mobile menu

  const handleLinkClick = (e) => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
    // Close the mobile menu when a link is clicked
    setIsMenuOpen(false);
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
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Reset to default
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{
        background: "rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-end items-center py-6 text-white text-sm uppercase tracking-widest">
        <li className="px-4">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/work" onClick={handleLinkClick}>Work</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/scripts" onClick={handleLinkClick}>Scripts</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/reel" onClick={handleLinkClick}>Reel</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/info" onClick={handleLinkClick}>Info</Link>
        </li>
        <li>|</li>
        <li className="px-4">
          <Link to="/art" onClick={handleLinkClick}>Art</Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center py-6 px-4">
        <button
          className="text-white z-50"
          onClick={handleHamburgerClick}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <>
              {/* X Icon */}
              <div className="w-6 h-0.5 bg-white mb-1 rotate-45 transform origin-center"></div>
              <div className="w-6 h-0.5 bg-white mb-1 -rotate-45 transform origin-center"></div>
            </>
          ) : (
            <>
              {/* Hamburger Icon */}
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
            </>
          )}
        </button>
      </div>

      {/* Mobile menu links with fade-in and fade-out */}
      <div
        className={`md:hidden flex flex-col items-center justify-center bg-black text-white py-4 transition-opacity duration-500 fixed top-0 left-0 w-full h-screen ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 1)", // Darken background for a full-page effect
          position: "fixed", // Ensure the menu stays fixed in place
        }}
      >
        <Link to="/" onClick={handleLinkClick} className="py-4 text-xl font-futura">Home</Link>
        <Link to="/work" onClick={handleLinkClick} className="py-4 text-xl font-futura">Work</Link>
        <Link to="/scripts" onClick={handleLinkClick} className="py-4 text-xl font-futura">Scripts</Link>
        <Link to="/reel" onClick={handleLinkClick} className="py-4 text-xl font-futura">Reel</Link>
        <Link to="/info" onClick={handleLinkClick} className="py-4 text-xl font-futura">Info</Link>
        <Link to="/art" onClick={handleLinkClick} className="py-4 text-xl font-futura">Art</Link>
      </div>
    </nav>
  );
};

export default Navbar;
