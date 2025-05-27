import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo or Site Title */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Developed By
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 text-gray-800 dark:text-white">
          {/* Resume Download Link - now visible on all screens */}
          <li>
            <a
              href="/Pavan resume.pdf"
              download
              className="hover:text-blue-600 dark:hover:text-yellow-300 transition-colors duration-300"
            >
              Resume
            </a>
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
