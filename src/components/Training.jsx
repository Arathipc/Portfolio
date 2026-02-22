import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Training = ({ darkMode }) => {
  const trainingDetails = [
    {
      icon: Calendar,
      title: 'Duration',
      value: '3 Months',
      description: 'Intensive training program'
    },
    {
      icon: BookOpen,
      title: 'Focus Areas',
      value: 'Full Stack Development',
      description: 'MERN Stack & Modern Technologies'
    },
    {
      icon: Award,
      title: 'Certification',
      value: 'Completed',
      description: 'Industry-recognized training'
    }
  ];

  return (
    <section id="training" className="py-20">
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
            Training Experience
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}></div>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive 3-month training program that equipped me with hands-on experience
            in modern web development technologies and industry best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trainingDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl text-center ${
                darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                darkMode ? 'bg-emerald-500/20' : 'bg-emerald-100'
              }`}>
                <detail.icon className="text-emerald-400" size={28} />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {detail.title}
              </h3>
              <p className={`text-lg font-medium mb-2 ${
                darkMode ? 'text-emerald-300' : 'text-emerald-600'
              }`}>
                {detail.value}
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
          }`}
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="text-emerald-400 mr-3" size={32} />
            <h3 className={`text-2xl font-semibold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What I Learned
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Technical Skills
              </h4>
              <ul className={`space-y-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>• Typescript</li>
                <li>• React.js & Component Architecture</li>
                <li>• Node.js & Express.js</li>
                <li>• MongoDB & Database Design</li>
                <li>• RESTful API Development</li>
                <li>• Git Version Control</li>
                <li>• Tailwiind CSS</li>
              </ul>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Professional Skills
              </h4>
              <ul className={`space-y-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <li>• Code Review & Best Practices</li>
                <li>• Problem-Solving Techniques</li>
                <li>• Team Collaboration</li>
                <li>• Project Management Basics</li>
                <li>• Industry Standards & Ethics</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;