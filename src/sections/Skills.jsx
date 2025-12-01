import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaGitAlt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiC, SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "C", icon: <SiC size={50} className="text-blue-500" /> },
    { name: "Python", icon: <FaPython size={50} className="text-yellow-400" /> },
    // { name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
    { name: "PHP", icon: <FaPhp size={50} className="text-indigo-400" /> },
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-300" /> },
    { name: "ReactJS", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress size={50} className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql size={50} className="text-blue-600" /> },
    { name: "Git", icon: <FaGitAlt size={50} className="text-red-600" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center hover:border-cyan-500 transition-colors duration-300 shadow-lg"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-300">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
