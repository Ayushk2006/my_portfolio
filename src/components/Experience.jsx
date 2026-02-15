import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Paiteq Private Limited',
      role: 'Software Developer',
      duration: 'May 2024 – Present',
      description: 'Architecting proximity-based social platforms and real-time systems. Implemented custom timeline aggregators with Redis, typo-tolerant search with Typesense, and low-latency chat using MQTT.',
      tech: ['Node.js', 'NestJS', 'Redis', 'MQTT', 'Typesense', 'MongoDB'],
    },
    {
      company: 'Paiteq Private Limited',
      role: 'Software Developer Intern',
      duration: 'Dec 2023 – April 2024',
      description: 'Contributed to backend development using TypeScript/Node.js. Optimized RESTful APIs, designed database schemas, and managed AWS infrastructure.',
      tech: ['TypeScript', 'Node.js', 'NestJS', 'React', 'AWS'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            Work Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="space-y-12 relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-between relative`}
            >
              <div className="w-full md:w-5/12">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                      <Calendar size={14} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 items-center justify-center z-10">
                <Briefcase size={14} className="text-white" />
              </div>
              
              <div className="w-full md:w-5/12 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
