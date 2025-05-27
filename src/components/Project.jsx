import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Healthone",
    description: "A health tracking platform providing personalized wellness insights and appointment scheduling.",
    link: "https://github.com/pavankumarkkgf/HelathOne",
  },
  {
    title: "SpeaQAI",
    description: "An AI-powered tool that enhances real-time communication by providing live transcription and smart conversation summaries.",
    link: "https://github.com/pavankumarkkgf/SpeaQAI",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} key={index}>
              <motion.div
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View Project →
                </a>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;