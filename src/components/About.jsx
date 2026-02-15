import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Backend Development', icon: Server, description: 'Node.js, NestJS, Express.js, C/C++' },
    { name: 'Database & Storage', icon: Database, description: 'MongoDB, PostgreSQL, Redis, Typesense' },
    { name: 'System Architecture', icon: Smartphone, description: 'Microservices, MQTT/EMQX, BullMQ' },
    { name: 'Languages & Tools', icon: Code, description: 'JavaScript, TypeScript, Docker, AWS' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          >
            <p>
              I am a Software Developer at <span className="text-blue-600 font-semibold">Paiteq Private Limited</span>, with a strong background in building high-performance backend systems. 
              I graduated with a B.Tech in Computer Science from <span className="font-semibold text-gray-900 dark:text-white">NIT Patna</span> (8.24 CGPA).
            </p>
            <p>
              My expertise lies in architecting real-time applications using technologies like <strong>Node.js, NestJS, and MQTT</strong>. 
              I have hands-on experience in optimizing database queries, managing heavy background jobs with Redis/BullMQ, 
              and deploying scalable cloud infrastructure.
            </p>
            <p>
              Apart from development, I am an avid competitive programmer, achieving the title of <strong>Knight on LeetCode</strong> and <strong>Specialist on Codeforces</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <skill.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
