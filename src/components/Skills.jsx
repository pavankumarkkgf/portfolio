import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React", icon: <FaReact className="text-sky-400 text-4xl animate-spin-slow" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
  { name: "Python (Learning)", icon: <FaPython className="text-blue-500 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {skill.icon}
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
