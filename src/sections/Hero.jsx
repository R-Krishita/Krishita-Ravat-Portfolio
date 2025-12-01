import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import anime from 'animejs';
import * as THREE from 'three';

const Hero = () => {
  const nameRef = useRef(null);
  const canvasRef = useRef(null);
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Krishita Haresh Ravat';

  // Three.js scene setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x06b6d4, // cyan-500
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create geometric shapes
    const geometries = [
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.6),
      new THREE.TetrahedronGeometry(0.7),
    ];

    const material = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const meshes = geometries.map((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (index - 1) * 2;
      mesh.position.z = -2;
      scene.add(mesh);
      return mesh;
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Rotate geometric shapes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01 * (index + 1);
        mesh.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach(g => g.dispose());
      material.dispose();
    };
  }, []);

  // Typing animation with anime.js
  useEffect(() => {
    if (!nameRef.current) return;

    // Set initial state
    nameRef.current.innerHTML = '';
    
    // Create spans for each character
    const chars = fullName.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      nameRef.current.appendChild(span);
      return span;
    });

    // Animate typing effect
    anime({
      targets: chars,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100), // 100ms delay between each character
      duration: 500,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 relative overflow-hidden">
      {/* Three.js Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-semibold tracking-wide uppercase mb-2"
          >
            Hello, I am
          </motion.h2>
          
          {/* Animated Name with Typing Effect */}
          <h1 
            ref={nameRef}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {/* Characters will be inserted by anime.js */}
          </h1>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="text-xl md:text-2xl text-gray-400 mb-6"
          >
            Web Development Enthusiast
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="text-gray-300 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
          >
            Committed to continuous learning and knowledge sharing, with a strong focus on excellence and organizational skills. <br />Growth Mindset | Proactive Learner.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="flex space-x-4 justify-center md:justify-start"
          >
            <a href="https://github.com/R-Krishita" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/krishita-haresh-ravat-16535025b/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:krishita1829.work@gmail.com" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110">
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>

        {/* Image/Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex-1 mt-10 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-700 overflow-hidden bg-slate-800 flex items-center justify-center">
               <img src="/assets/portfolio-modified.png" alt="Krishita" className="w-full h-full object-cover" onError={(e) => {e.target.onerror=null; e.target.src='https://via.placeholder.com/300?text=KR';}} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
