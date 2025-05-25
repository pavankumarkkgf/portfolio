import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-center">
          <p>
            I am a frontend developer with expertise in React, TailwindCSS, and modern JavaScript frameworks.
            I’ve built dynamic web interfaces, including an AI-powered mock interview platform with real-time video and learning modules.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;