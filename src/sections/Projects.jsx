import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  console.log("Projects component rendering...");
  const projects = [
    {
      title: "Solar Flare Forecasting",
      category: "Machine Learning / Deep Learning",
      tech: ["Python", "TensorFlow", "PyTorch"],
      description: "Developed a multi-modal deep learning model using NASA SDO imagery and SHARP magnetic-field parameters to predict solar flare classes and intensity. Designed a hybrid CNN-GRU architecture with temporal attention, and conducted detailed evaluation using ROC curves, AUC, and confusion matrices to diagnose class-imbalance limitations.",
      links: {
        github: "https://github.com/R-Krishita", // Placeholder
        // demo: "#"    // Placeholder
      }
    },
    {
      title: "Vyaas – AI-Powered Crop Yield Prediction",
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
      category: "Web Development",
      tech: ["HTML", "CSS", "PHP"],
      description: "Engineered a robust online doctor appointment management system with distinct administrative, doctor, and patient modules. Implemented efficient scheduling, data validation, and user access controls to enhance overall system reliability and user experience.",
      links: {
        github: "https://github.com/R-Krishita/HappyLife", // Placeholder
        demo: "https://happy-life-eight.vercel.app/"    // Placeholder
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

        <div className="relative container mx-auto px-6 flex flex-col space-y-8">
          <div className="absolute z-0 w-1 h-full bg-slate-700 shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"></div>
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className={index % 2 === 0 ? "timeline-container timeline-container-left" : "timeline-container timeline-container-right"}>
                <div className={index % 2 === 0 ? "timeline-pointer timeline-pointer-left" : "timeline-pointer timeline-pointer-right"} aria-hidden="true"></div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl hover:border-cyan-500/50 transition-all duration-300">
                  <span className="font-bold text-cyan-400 text-sm tracking-wide">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-md border border-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-50">
                    {project.links.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-link-github text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer relative z-50"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm cursor-pointer relative z-50"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
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
