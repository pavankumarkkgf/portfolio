import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Home", "Skills", "Projects", "Resume"];

  return (
    <motion.nav
      className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Developed By
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((name) => (
            <motion.li key={name} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a
                href={`#${name.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-yellow-300 transition-colors duration-300"
              >
                {name}
              </a>
            </motion.li>
          ))}
          <li>
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle Dark Mode"
              whileTap={{ rotate: 180, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
            </motion.button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={toggleMenu} className="text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle Dark Mode"
            whileTap={{ rotate: 180, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.ul
          className="md:hidden flex flex-col space-y-4 px-4 pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((name) => (
            <li key={name}>
              <a
                href={`#${name.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg hover:text-blue-600 dark:hover:text-yellow-300 transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
