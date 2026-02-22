import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        {name: 'Python', level: 50}
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
    
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        {name:'Postman' ,level: 75},
        { name: 'VS Code', level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
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
            Skills & Expertise
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;