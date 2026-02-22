import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className="text-emerald-400">Arathi</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Full Stack Developer
            </p>
            <p className={`text-lg mb-12 max-w-2xl mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              I create beautiful, responsive web applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`border-2 px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  darkMode
                    ? 'border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white'
                    : 'border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                View My Work
              </motion.a>
              <motion.a
                href="/cv.pdf"
                download="Arathi_PC.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                <Download className="mr-2" size={20} />
                Download CV
              </motion.a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
              <motion.a
                href="https://github.com/Arathipc"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/arathi-pc-34a830269"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:arathi.pc.02@gmail.com"
                whileHover={{ scale: 1.1 }}
                className={`p-3 rounded-full transition-colors duration-200 ${
                  darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end items-center"
          >
            <div className="relative">
              <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                darkMode ? 'border-emerald-400/30' : 'border-emerald-500/30'
              } shadow-2xl`}>
                <img
                  src="/profile.jpg"
                  alt="Arathi PC - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="400" fill="${darkMode ? '#1f2937' : '#f3f4f6'}"/>
                        <circle cx="200" cy="150" r="60" fill="${darkMode ? '#10b981' : '#059669'}"/>
                        <path d="M120 280 Q200 220 280 280 L280 350 L120 350 Z" fill="${darkMode ? '#10b981' : '#059669'}"/>
                        <text x="200" y="380" text-anchor="middle" fill="${darkMode ? '#9ca3af' : '#6b7280'}" font-family="Arial" font-size="16">Add your photo here</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full ${
                darkMode ? 'bg-emerald-400/20' : 'bg-emerald-500/20'
              } blur-xl`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                darkMode ? 'bg-blue-400/20' : 'bg-blue-500/20'
              } blur-xl`}></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`cursor-pointer ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;