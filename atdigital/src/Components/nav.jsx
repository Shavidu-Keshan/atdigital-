import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth >= 375 && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isBetween375And768 = window.innerWidth >= 375 && window.innerWidth <= 768;
      setShowHamburger(isBetween375And768);
      if (!isBetween375And768) {
        setIsOpen(false); // Close menu if screen is outside 375px-768px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-between h-20 px-8 bg-[#4F46E5] text-white">
      <img src={logo} alt="Logo" className="h-12" />

      {/* Navigation Menu */}
      <nav
        className={`absolute top-0 left-0 w-full h-screen flex flex-col items-start p-8 pt-20 bg-white text-black transition-transform duration-500 md:static md:flex-row md:h-auto md:w-auto md:bg-[#4F46E5] md:text-white md:items-center md:gap-6 md:p-0 md:pt-0 md:transition-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {["HOME", "SERVICES", "ABOUT US", "CONTACT US", "CAREERS"].map((item, index) => (
          <a key={index} href="/#" className="text-black hover:text-red-500 py-4 md:py-0 md:text-white">
            {item}
          </a>
        ))}

        {/* Close Button for Mobile */}
        {showHamburger && (
          <button className="absolute top-8 right-8 text-black text-3xl md:hidden" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        )}
      </nav>

      {/* Menu Toggle Button (Only visible between 375px - 768px) */}
      {showHamburger && (
        <button className="text-white text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      )}
    </header>
  );
};

export default Navbar;
