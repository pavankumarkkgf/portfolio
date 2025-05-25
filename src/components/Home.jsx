import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4"> Pavan kumar.K</h2>
        <p className="text-xl mb-6">
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
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300">Let's Connect</a>
      </motion.div>
    </section>
  );
};

export default Home;
