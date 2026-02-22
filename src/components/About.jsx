import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart, Download } from 'lucide-react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Story
              </h3>
              <p className={`mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
               I’m a passionate MERN Stack Developer and a fresher eager to build modern, scalable web applications. 
               My journey into web development started with a simple curiosity about how websites work, and it quickly turned 
               into a strong interest in creating seamless digital experiences.I specialize in MongoDB, Express.js, React, and
               Node.js, building full-stack applications that are responsive, efficient, and user-focused.
               I enjoy transforming ideas into functional products, writing clean code, and continuously improving my problem-solving skills through hands-on projects.
                
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
                I believe in continuous learning and staying up-to-date with the latest trends
                in web development.
              </p>
            </div>

            <motion.a
              href="/cv.pdf"
              download="Arathi_PC.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                darkMode
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              <Download className="mr-2" size={20} />
              Download My CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center mb-4">
                <Code className="text-emerald-400 mr-3" size={24} />
                <h4 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Development
                </h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Building robust applications with modern frameworks and best practices.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center mb-4">
                <User className="text-green-400 mr-3" size={24} />
                <h4 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Design
                </h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Creating intuitive and beautiful user interfaces that users love.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center mb-4">
                <Heart className="text-red-400 mr-3" size={24} />
                <h4 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Passion
                </h4>
              </div>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Committed to delivering high-quality solutions and continuous improvement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;