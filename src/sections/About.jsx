import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa';

const About = () => {
  const items = [
    {
      id: 1,
      icon: <FaGraduationCap size={30} className="text-cyan-400" />,
      title: "Education",
      description: (
        <div className="flex flex-col gap-4 text-left mt-2">
            <div className="relative pl-4 border-l-2 border-cyan-500/30">
                <h4 className="text-white font-bold text-lg">B.E. in Computer Engineering</h4>
                <p className="text-cyan-400 font-medium">University of Mumbai</p>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">2022 - 2026 (Expected Graduation)</span>
                    <span className="text-sm font-semibold text-white bg-slate-700 px-2 py-0.5 rounded">CGPA: 8.47</span>
                </div>
            </div>
            <div className="relative pl-4 border-l-2 border-purple-500/30">
                <h4 className="text-white font-bold text-lg">Higher Secondary AISSCE (12th)</h4>
                <p className="text-purple-400 font-medium">D.A.V. International School</p>
                <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-500">2021 - 2022</span>
                    <span className="text-sm font-semibold text-white bg-slate-700 px-2 py-0.5 rounded">87.2%</span>
                </div>
            </div>
        </div>
      )
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
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12"
          >
            As an AI & Full-Stack Engineer, I specialize in designing end-to-end data-driven solutions that transform complex information into real, usable outcomes. My work spans building predictive models, crafting insightful analytics, and developing full-stack applications that bring these models to life.<br />

            I blend machine learning with modern web engineering to create scalable, reliable, and user-focused systems. Whether it’s training ML models, architecting APIs, or engineering seamless frontends, I love turning ideas into production-ready digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
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
              <div className="text-gray-400 text-center leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
