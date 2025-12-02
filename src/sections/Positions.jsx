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

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-1 h-full bg-slate-700 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          {positions.map((pos, index) => (
            <motion.div 
              key={pos.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className={index % 2 === 0 ? "timeline-container timeline-container-left" : "timeline-container timeline-container-right"}>
                <div className={index % 2 === 0 ? "timeline-pointer timeline-pointer-left" : "timeline-pointer timeline-pointer-right"} aria-hidden="true"></div>
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-700 shrink-0">
                      {pos.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{pos.role}</h3>
                      <p className="text-cyan-400 font-medium">{pos.organization}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-800 text-gray-400 text-xs rounded-full border border-slate-700">
                      {pos.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {pos.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;
