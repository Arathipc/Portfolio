import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and dark mode support.',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Arathipc/Portfolio',
      demo: 'https://portfolio-demo.com',
      image: '/src/assets/image/portfolio.png'
    }
    ,{
      title: 'Payment Slip Generator',
      description: 'Developed a payment slip management system using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to add, edit, and delete employee records. The application automatically calculates net salary by deducting leave payments, providing an efficient and user-friendly payroll management solution',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/Arathipc/PayForm',
      image: 'src/assets/image/payform.png'
    },
    {
      title: 'Tastey Tales',
      description: 'Developed a full-stack recipe management web application using React, Node.js, Express.js, and MongoDB. The platform allows users to create, view, like, and comment on recipes, with secure JWT-based authentication and protected routes. Users can manage their own posts with full CRUD functionality, including editing and deleting their recipes.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Arathipc/tastytales',
    
      image: '/src/assets/image/tastytales.png'
    },
    {
      title: 'Automatic Skin cancer detection system',
      description: 'Developed a skin cancer classification application using EfficientNetB7 with TensorFlow and Keras, featuring image preprocessing for improved accuracy and a Tkinter-based GUI for real-time prediction and user interaction.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Tkinter'],
      
      image: '/src/assets/image/skincancer.png'
    },
    
  ];

  return (
    <section id="projects" className="py-20">
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
            Featured Projects
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden ${
                darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </motion.a>
                  {/* <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </motion.a> */}
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Arathipc"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
              darkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;