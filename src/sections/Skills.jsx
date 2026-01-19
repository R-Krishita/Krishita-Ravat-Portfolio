import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaChevronLeft,
  FaChevronRight,
  FaPhp,
} from "react-icons/fa";
import {
  SiC,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTableau,
  // SiPowerbi,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiVercel,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const Skills = () => {
  const scrollContainerRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython size={28} /> },
        { name: "C", icon: <SiC size={28} /> },
        { name: "PHP", icon: <FaPhp size={28} /> },
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Data Visualization",
      skills: [
        { name: "Tableau", icon: <SiTableau size={28} /> },
        { name: "Power BI", icon: null }
        // { name: "Power BI", icon: <SiPowerbi size={28} /> },
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", icon: <SiScikitlearn size={28} /> },
        { name: "Deep Learning", icon: <SiTensorflow size={28} /> },
        { name: "Data Preprocessing", icon: null },
        { name: "Feature Engineering", icon: null },
        { name: "Model Evaluation", icon: null },
      ],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "Scipy", icon: <SiScipy size={28} /> },
        { name: "Pandas", icon: <SiPandas size={28} /> },
        { name: "NumPy", icon: <SiNumpy size={28} /> },
        { name: "Matplotlib", icon: null },
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql size={28} /> },
        { name: "MongoDB", icon: <SiMongodb size={28} /> },
      ],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt size={28} /> },
        { name: "GitHub", icon: <FaGithub size={28} /> },
      ],
      gradient: "from-rose-500 to-red-700",
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact size={28} /> },
        { name: "Node.js", icon: <FaNodeJs size={28} /> },
        { name: "Express.js", icon: <SiExpress size={28} /> },
        { name: "HTML5", icon: <FaHtml5 size={28} /> },
        { name: "CSS3", icon: <FaCss3Alt size={28} /> },
        { name: "JavaScript", icon: <FaJs size={28} /> },
      ],
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      title: "Deployment",
      skills: [{ name: "Vercel", icon: <SiVercel size={28} /> }],
      gradient: "from-gray-600 to-slate-800",
    },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-800 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Scroll Buttons */}
        <div className="hidden md:flex justify-end gap-3 mb-6 pr-4">
          <button
            onClick={() => scroll("left")}
            className="p-3 rounded-full bg-slate-700/50 hover:bg-cyan-500/30 border border-slate-600 hover:border-cyan-500 transition-all duration-300 text-gray-400 hover:text-white"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 rounded-full bg-slate-700/50 hover:bg-cyan-500/30 border border-slate-600 hover:border-cyan-500 transition-all duration-300 text-gray-400 hover:text-white"
            aria-label="Scroll right"
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex-shrink-0 w-72 md:w-80 snap-start"
            >
              <div className="h-full bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl overflow-hidden group">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${category.gradient} p-5`}>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="p-5 space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/70 transition-colors duration-200 group/skill"
                    >
                      {skill.icon ? (
                        <span className="text-cyan-400 group-hover/skill:text-cyan-300 transition-colors">
                          {skill.icon}
                        </span>
                      ) : (
                        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-bold">
                          {skill.name.charAt(0)}
                        </span>
                      )}
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-gray-500 text-sm mt-4 md:hidden">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default Skills;
