import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Solar Flare Forecasting",
      category: "Machine Learning / Deep Learning",
      tech: ["Python", "TensorFlow", "PyTorch"],
      description: "Developed a multi-modal deep learning model using NASA SDO imagery and SHARP magnetic-field parameters to predict solar flare classes and intensity. Designed a hybrid CNN-GRU architecture with temporal attention, and conducted detailed evaluation using ROC curves, AUC, and confusion matrices to diagnose class-imbalance limitations.",
      links: {
        github: "#", // Placeholder
        demo: "#"    // Placeholder
      }
    },
    {
      title: "Vyaas – AI-Powered Crop Yield Prediction",
      category: "Full-Stack / Machine Learning",
      tech: ["MERN Stack", "Python"],
      description: "Built an AI-driven agricultural advisory system with multi-service architecture that scores crop suitability, predicts yield and profit, and generates personalized farm recommendations using weather, soil, and market data. Implemented the Top-3 crop recommendation engine, market insights module, and an actionable advisory layer to help farmers improve crop decisions and profitability.",
      links: {
        github: "#", // Placeholder
        demo: "#"    // Placeholder
      }
    },
    {
      title: "HappyLife",
      category: "Web Development",
      tech: ["HTML", "CSS", "PHP"],
      description: "Engineered a robust online doctor appointment management system with distinct administrative, doctor, and patient modules. Implemented efficient scheduling, data validation, and user access controls to enhance overall system reliability and user experience.",
      links: {
        github: "#", // Placeholder
        demo: "#"    // Placeholder
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-cyan-400 text-sm font-medium mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full border border-slate-600">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
