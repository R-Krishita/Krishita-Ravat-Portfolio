// Publications.jsx - Academic publications showcase with 3D effects and animations
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaQuoteLeft, FaAward, FaBrain, FaMicroscope } from 'react-icons/fa';

const Publications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const publications = [
    {
      id: 1,
      title: "Efficient Deep Learning Approach for Brain Tumor Detection and Segmentation Using RF in U-Net over SVM",
      authors: [
        { name: "Krishita Haresh Ravat", highlight: true },
        { name: "Bhavya Biren Shah", highlight: false },
        { name: "E. Afreen Banu", highlight: false },
        { name: "Pinki Vishwakarma", highlight: false },
        { name: "Tejas Sukhadeo Hirave", highlight: false }
      ],
      venue: "Journal of Information Systems Engineering and Management",
      date: "July 9, 2025",
      year: "2025",
      abstract: "Brain tumor detection and segmentation in MRI images are critical for accurate diagnosis and treatment planning. Traditional methods rely heavily on manual feature extraction, which is time-consuming and prone to inconsistencies. This study presents an innovative deep learning-based framework that leverages RF, SVM, and U-Net architecture to automate tumor detection and segmentation. The proposed method enhances medical image processing through optimized preprocessing techniques, transfer learning, and feature extraction. The evaluation of the system shows a classification accuracy of 87.5% and a segmentation dice coefficient of 0.70, demonstrating superior performance compared to existing methods. The study highlights the potential of deep learning models in medical imaging, offering a reliable and scalable solution for brain tumor analysis.",
      stats: {
        accuracy: "87.5%",
        diceCoefficient: "0.70"
      },
      links: {
        paper: "https://www.jisem-journal.com/index.php/journal/article/view/11529"
      },
      tags: ["Deep Learning", "Medical Imaging", "U-Net", "Brain Tumor", "Segmentation"]
    }
  ];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Floating icons for background
  const FloatingIcon = ({ Icon, delay, duration, x, y }) => (
    <motion.div
      className="absolute text-cyan-500/10 pointer-events-none"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Icon size={40} />
    </motion.div>
  );

  return (
    <section id="publications" className="min-h-screen bg-slate-900 py-20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon Icon={FaBrain} delay={0} duration={4} x="10%" y="20%" />
      <FloatingIcon Icon={FaMicroscope} delay={1} duration={5} x="85%" y="15%" />
      <FloatingIcon Icon={FaBook} delay={2} duration={4.5} x="15%" y="70%" />
      <FloatingIcon Icon={FaAward} delay={0.5} duration={5.5} x="80%" y="75%" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
              <FaBook className="text-4xl text-cyan-400" />
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Academic Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Research contributions in the field of Artificial Intelligence and Medical Imaging
          </p>
        </motion.div>

        {publications.map((pub, index) => (
          <motion.div
            key={pub.id}
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovering
                ? `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
                : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
              transition: 'transform 0.1s ease-out'
            }}
            className="relative group"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500 animate-gradient-x" />
            
            {/* Spotlight effect */}
            {isHovering && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{
                  background: `radial-gradient(circle at ${50 + mousePosition.x * 5}% ${50 + mousePosition.y * 5}%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`
                }}
              />
            )}

            {/* Main card content */}
            <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30"
                  >
                    <FaBrain className="text-2xl text-cyan-400" />
                  </motion.div>
                  <div>
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                      Published Research
                    </span>
                    <p className="text-gray-400 text-sm mt-1">{pub.date}</p>
                  </div>
                </div>
                
                {/* Stats badges */}
                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-green-500/10 rounded-lg border border-green-500/30"
                  >
                    <span className="text-green-400 text-xs font-medium block">Accuracy</span>
                    <span className="text-white font-bold">{pub.stats.accuracy}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-500/10 rounded-lg border border-blue-500/30"
                  >
                    <span className="text-blue-400 text-xs font-medium block">Dice Score</span>
                    <span className="text-white font-bold">{pub.stats.diceCoefficient}</span>
                  </motion.div>
                </div>
              </div>

              {/* Title with gradient */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent leading-relaxed">
                {pub.title}
              </h3>

              {/* Authors */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-gray-500 text-sm">Authors:</span>
                {pub.authors.map((author, idx) => (
                  <span key={idx} className="relative">
                    <span className={`text-sm ${author.highlight ? 'text-cyan-400 font-semibold' : 'text-gray-400'}`}>
                      {author.name}
                    </span>
                    {idx < pub.authors.length - 1 && <span className="text-gray-600 ml-1">,</span>}
                  </span>
                ))}
              </div>

              {/* Venue */}
              <div className="flex items-center gap-2 mb-6 text-sm">
                <FaBook className="text-purple-400" />
                <span className="text-purple-300 font-medium">{pub.venue}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-slate-900/50 text-cyan-100/80 text-xs font-medium rounded-full border border-slate-700/50 hover:border-cyan-500/50 transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Expandable Abstract */}
              <div className="border-t border-slate-700/50 pt-4">
                <motion.button
                  onClick={() => toggleExpand(pub.id)}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors w-full justify-between group/btn"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <FaQuoteLeft className="text-cyan-500/50" />
                    <span className="font-medium">Abstract</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === pub.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-cyan-500" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedId === pub.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 leading-relaxed mt-4 pl-4 border-l-2 border-cyan-500/30 italic">
                        {pub.abstract}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-slate-700/50">
                <motion.a
                  href={pub.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
                >
                  <FaExternalLinkAlt />
                  View Publication
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Publications;
