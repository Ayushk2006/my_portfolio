import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import profilePic from '../assets/images/profile_image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse md:flex-row items-center relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm <br className="md:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aayush Sharma
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-12">
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Backend Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-semibold text-blue-600 dark:text-blue-400"
              />
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
             I architect scalable backend systems and real-time applications. Specialized in Node.js, NestJS, and Distributed Systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg overflow-hidden transition-all hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                View Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:scale-105 shadow-sm"
              >
                Contact Me
                <Mail className="ml-2" size={20} />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-500 dark:text-gray-400">
              <a href="https://github.com/Ayushk2006" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aayush-kumar-sharma-102bb9227/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 transform">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Profile Image */}
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto"
          >
            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-20 dark:opacity-40 animate-pulse"></div>
              <img 
                src={profilePic} 
                alt="Aayush Sharma" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl z-10"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
