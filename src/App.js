import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Home />
        <About />
        <Skills />
        <Project />
        <Resume />
        <Contact />
        <Detail />
        <Footer />
      </main>
    </div>
  );
};

export default App;