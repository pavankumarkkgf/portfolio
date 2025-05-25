import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
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
          My Portfolio
        </motion.h1>

        <ul className="flex space-x-6 items-center">
          {["Home", "Skills", "Projects", "Resume"].map((name) => (
            <motion.li key={name} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <a href={`#${name.toLowerCase()}`} className="hover:text-blue-600 dark:hover:text-yellow-300 transition-colors duration-300">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;