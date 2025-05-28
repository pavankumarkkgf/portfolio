import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gradient-to-r from-blue-100 to-blue-300"
    >
      {/* Text Content */}
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4 text-gray-900">
          Pavan Kumar.K
        </h2>
        <p className="text-xl mb-6 text-gray-900">
          <Typewriter
            words={["Front-End Developer", "React Enthusiast", "UI/UX Explorer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
        >
          Let's Connect
        </a>
      </motion.div>

      {/* Profile Image + Icons */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img
            src="/my.jpg"
            alt="Pavan Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Icons */}
       <div className="flex space-x-6 mt-4 text-2xl text-gray-800 dark:text-black">
  <a
    href="https://github.com/pavankumarkkgf"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black transition-transform hover:scale-110"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/pavan-kumar-k-42922b35a/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-black transition-transform hover:scale-110"
  >
    <FaLinkedin />
  </a>
  <a
    href="mailto:pavankumarkkgf@gmail.com"
    className="hover:text-black transition-transform hover:scale-110"
  >
    <FaEnvelope />
  </a>
</div>
      </motion.div>
    </section>
  );
};

export default Home;
