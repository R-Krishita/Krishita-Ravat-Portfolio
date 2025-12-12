// Preloader.jsx - Light beam reveal animation with expanding ray effect
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0); 
  // 0: initial loading
  // 1: progress bar filling
  // 2: progress complete, light ray starts
  // 3: light ray expanding and revealing
  // 4: fade out

  useEffect(() => {
    // Phase 1: Start progress bar
    const timer1 = setTimeout(() => setPhase(1), 300);
    
    // Phase 2: Progress complete
    const timer2 = setTimeout(() => setPhase(2), 1800);
    
    // Phase 3: Light ray starts moving and expanding
    const timer3 = setTimeout(() => setPhase(3), 2200);
    
    // Phase 4: Complete - hide preloader
    const timer4 = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#000000' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Pure black background */}
          <div className="absolute inset-0 bg-black" />

          {/* Center content - Logo and Progress Bar */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: phase >= 3 ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0, 
                y: phase >= 1 ? 0 : 20 
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-cyan-400">K</span>
              <span className="text-white">R</span>
            </motion.h1>
            
            {/* Progress bar container */}
            <motion.div
              className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ 
                opacity: phase >= 1 ? 1 : 0,
                scaleX: 1
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress bar fill */}
              <motion.div
                className="h-full bg-cyan-400 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: phase >= 2 ? 1 : phase >= 1 ? 0.7 : 0
                }}
                transition={{ 
                  duration: phase >= 2 ? 0.4 : 1.2, 
                  ease: "easeOut" 
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-gray-500 text-sm mt-4 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 && phase < 3 ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {phase >= 2 ? "Ready" : "Loading..."}
            </motion.p>
          </motion.div>

          {/* Light Ray from Center Left to Right - Expanding */}
          {phase >= 2 && (
            <motion.div
              className="absolute top-0 bottom-0 pointer-events-none"
              style={{
                left: '50%',
                width: '10px',
              }}
              initial={{ 
                x: '-50%',
                scaleX: 1,
                opacity: 1
              }}
              animate={{ 
                x: phase >= 3 ? '100vw' : '-50%',
                scaleX: phase >= 3 ? 300 : 1,
              }}
              transition={{ 
                duration: 1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {/* The light ray itself */}
              <div 
                className="h-full w-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.8), rgba(255, 255, 255, 0.9), rgba(6, 182, 212, 0.8), transparent)',
                  boxShadow: '0 0 60px 30px rgba(6, 182, 212, 0.5)',
                }}
              />
            </motion.div>
          )}

          {/* Right side fill - expands as light ray moves */}
          {phase >= 3 && (
            <motion.div
              className="absolute top-0 bottom-0 right-0 pointer-events-none"
              style={{
                background: 'linear-gradient(270deg, white 0%, rgba(255,255,255,0.95) 50%, transparent 100%)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
            />
          )}

          {/* Final white flash overlay */}
          {phase >= 3 && (
            <motion.div
              className="absolute inset-0 bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ 
                duration: 0.6,
                delay: 0.5,
                ease: "easeIn"
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
