import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import anime from 'animejs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    
    // Animate notification with anime.js
    anime({
      targets: '.notification',
      translateY: ['-100%', '0%'],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo'
    });

    // Auto-hide after 5 seconds
    setTimeout(() => {
      anime({
        targets: '.notification',
        translateY: ['0%', '-100%'],
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInExpo',
        complete: () => {
          setNotification({ show: false, type: '', message: '' });
        }
      });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      showNotification('error', 'Please enter your name');
      return;
    }

    if (!formData.email.trim()) {
      showNotification('error', 'Please enter your email');
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification('error', 'Please enter a valid email address');
      return;
    }

    if (!formData.message.trim()) {
      showNotification('error', 'Please enter a message');
      return;
    }

    setLoading(true);

    try {
      // Send data to backend
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        showNotification('error', error.response.data.message || 'Failed to send message. Please try again.');
      } else if (error.request) {
        showNotification('error', 'Cannot connect to server. Please make sure the backend is running.');
      } else {
        showNotification('error', 'An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-900 py-20 relative overflow-hidden">
      {/* Notification */}
      {notification.show && (
        <div className="notification fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-2xl flex items-center space-x-3"
          style={{
            backgroundColor: notification.type === 'success' ? '#10b981' : '#ef4444',
            color: 'white'
          }}
        >
          {notification.type === 'success' ? (
            <FaCheckCircle size={24} />
          ) : (
            <FaTimesCircle size={24} />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect!</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <h3 className="text-2xl font-semibold text-gray-200">Get in touch</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:krishita1829.work@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                  <FaEnvelope size={20} />
                </div>
                <span>krishita1829.work@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/krishita-haresh-ravat-16535025b/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                  <FaLinkedin size={20} />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/R-Krishita" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                  <FaGithub size={20} />
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Krishita Haresh Ravat. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
