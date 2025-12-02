import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  console.log("Projects component rendering...");
  const projects = [
    {
      title: "Solar Flare Forecasting",
      status: "Ongoing",
      category: "Machine Learning / Deep Learning",
      tech: ["Python", "TensorFlow", "PyTorch"],
      description: "Developed a multi-modal deep learning model using NASA SDO imagery and SHARP magnetic-field parameters to predict solar flare classes and intensity. Designed a hybrid CNN-GRU architecture with temporal attention, and conducted detailed evaluation using ROC curves, AUC, and confusion matrices to diagnose class-imbalance limitations.",
      links: {
        github: "https://github.com/R-Krishita", // Placeholder
        // demo: "#"    // Placeholder
      }
    },
    {
      title: "Vyaas – AI-Powered Crop Advisory System",
      status: "Ongoing",
      category: "Full-Stack / Machine Learning",
      tech: ["MERN Stack", "Python"],
      description: "Built an AI-driven agricultural advisory system with multi-service architecture that scores crop suitability, predicts yield and profit, and generates personalized farm recommendations using weather, soil, and market data. Implemented the Top-3 crop recommendation engine, market insights module, and an actionable advisory layer to help farmers improve crop decisions and profitability.",
      links: {
        github: "https://github.com/R-Krishita/VYAAS-MOBILE-APP", // Placeholder
        demo: "https://vyaas-mobile-app.vercel.app/"    // Placeholder
      }
    },
    {
      title: "HappyLife",
      status: "Completed",
      category: "Web Development",
      tech: ["HTML", "CSS", "PHP"],
      description: "Engineered a robust online doctor appointment management system with distinct administrative, doctor, and patient modules. Implemented efficient scheduling, data validation, and user access controls to enhance overall system reliability and user experience.",
      links: {
        github: "https://github.com/R-Krishita/HappyLife", // Placeholder
        demo: "https://happy-life-eight.vercel.app/"    // Placeholder
      }
    },
    {
      title: "Workout Routine Generator",
      status: "Completed",
      category: "Web Development",
      tech: ["MERN Stack"],
      description: "Architected and deployed a personalized workout planning application using the MERN stack. Designed a responsive front end integrated with a MongoDB-backed API for dynamic routine generation. Strengthened proficiency in database structuring, API optimization, and seamless front–back-end communication",
      links: {
        github: "https://github.com/R-Krishita/workout-routine-genrator", // Placeholder
        demo: "https://workout-routine-genrator.vercel.app/"    // Placeholder
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col h-full"
            >
              {/* Top Gradient Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                    <FaFolderOpen className="text-2xl text-cyan-400" />
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
                        title="View Code"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="text-cyan-400 font-medium">{project.category}</span>
                  <span className="text-slate-600">•</span>
                  <span className={project.status === "Ongoing" ? "text-yellow-400" : "text-green-400"}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-700/50">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-900/50 text-cyan-100/80 text-xs font-medium rounded-full border border-slate-700/50">
                      {t}
                    </span>
                  ))}
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
