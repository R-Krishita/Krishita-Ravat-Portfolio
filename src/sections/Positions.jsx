import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb } from 'react-icons/fa';

const Positions = () => {
  const positions = [
    {
      id: 1,
      role: "General Secretary",
      organization: "SAKEC AICTE IDEALab",
      duration: "May 2025 - Present",
      description: "Oversee strategic planning and operational execution across a multidisciplinary 24-member team. Drive innovation by converting conceptual proposals into functional, product-oriented outcomes while maintaining coordination across technical and administrative verticals.",
      icon: <FaLightbulb size={24} className="text-yellow-400" />
    },
    {
      id: 2,
      role: "Website Team Co-Head",
      organization: "Computer Society of India - SAKEC",
      duration: "September 2023 - June 2024",
      description: "Collaborated with leads to ensure platform scalability, maintenance, and deployment of new features. Led debugging, code optimization, and user interface refinement initiatives to improve usability and performance metrics.",
      icon: <FaUsers size={24} className="text-pink-400" />
    }
  ];

  return (
    <section id="positions" className="min-h-screen bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Positions of Responsibility</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((pos, index) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                  {pos.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{pos.role}</h3>
                  <p className="text-cyan-400">{pos.organization}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-slate-800 text-gray-400 text-xs rounded-full border border-slate-700">
                  {pos.duration}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed">
                {pos.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;
