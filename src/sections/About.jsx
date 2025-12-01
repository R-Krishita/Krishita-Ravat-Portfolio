import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';

const About = () => {
  const items = [
    {
      id: 1,
      icon: <FaGraduationCap size={30} className="text-cyan-400" />,
      title: "Education",
      description: "Currently enrolled as an undergraduate student pursuing BE in Computer Engineering at Shah and Anchor Kutchhi Engineering College."
    },
    {
      id: 2,
      icon: <FaBriefcase size={30} className="text-purple-400" />,
      title: "Experience",
      description: "Internship Trainee Coordinator at VocalsLocal. Web Development Intern at CodSoft."
    },
    {
      id: 3,
      icon: <FaUsers size={30} className="text-pink-400" />,
      title: "Leadership",
      description: "Website Team Co-Head at CSI-SAKEC."
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto border border-slate-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{item.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
