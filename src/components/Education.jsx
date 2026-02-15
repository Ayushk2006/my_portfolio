import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      school: 'National Institute of Technology, Patna',
      year: 'Nov 2020 – May 2024',
      description: 'CGPA: 8.24. Core coursework in Data Structures, Algorithms, DBMS, OS, and Computer Networks.',
    },
    {
      degree: 'Intermediate (Class XII)',
      school: 'R.J.S. College, Dighwara',
      year: 'July 2017 – April 2019',
      description: 'BSEB. Percentage: 80.40%.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                {index !== education.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-4" />
                )}
              </div>
              
              <div className="pb-4">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full dark:bg-blue-900/20 dark:text-blue-400">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3">{edu.school}</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
