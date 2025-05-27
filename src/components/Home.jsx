import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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

      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/pavank.jpg"
          alt="Pavan Kumar"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
