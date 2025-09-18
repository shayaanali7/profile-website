import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Group Finder',
      description: 'A full-stack web application enabling university students to create and join groups for course projects, featuring secure authentication, real-time messaging, and intelligent search capabilities.',
      image: '/groupfinder.png',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'React Query'],
      liveUrl: 'https://groupfinder-co.vercel.app',
      githubUrl: 'https://github.com/shayaanali7/find-a-group',
      date: 'Summer 2025',
      category: 'web',
      showUrl: true,
      showCode: true,
    },
    {
      id: 2,
      title: 'Algorithm Visualizer',
      description: 'An interactive web-based tool to visualize sorting algorithms with step-by-step animations, helping students understand algorithmic logic through dynamic array manipulation and customizable parameters.',
      image: '/algovisualizer.png',
      technologies: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      liveUrl: 'https://algorithm-visualizer-ashen.vercel.app/',
      githubUrl: 'https://github.com/shayaanali7/algorithm-visualizer',
      date: 'Summer 2025',
      category: 'web',
      showUrl: true,
      showCode: true,
    },
    {
      id: 3,
      title: 'Virtual Pet Companion Game',
      description: 'An interactive virtual pet companion game built with Java and JavaFX, promoting responsibility and time management through engaging pet care mechanics and intuitive GUI design.',
      image: '/petimg.png',
      technologies: ['Java', 'JavaFX', 'Scene Builder'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/shayaanali7/virtual-pet-companion',
      date: 'Winter 2025',
      category: 'desktop',
      showUrl: false,
      showCode: true,
    },
    {
      id: 4,
      title: 'Challenger Carpet Cleaning Website',
      description: 'A fully responsive business website showcasing services, company information, and interactive features including dynamic contact forms with email automation to enhance customer engagement.',
      image: '/carpet.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'http://challengercarpet.meftech.org',
      githubUrl: 'https://github.com/shayaanali7/challenger-carpet-cleaning-website',
      date: 'Fall/Winter 2022-2023',
      category: 'web',
      showUrl: true,
      showCode: true,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've worked on, showcasing my skills in 
              full-stack development, algorithm visualization, and software engineering.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {projects.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-200"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                              {project.title}
                            </h4>
                            <span className="text-xs text-gray-400">{project.date}</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-block px-2 py-1 rounded text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="inline-block px-2 py-1 rounded text-xs bg-gray-700/50 text-gray-300 border border-gray-600/50">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex space-x-2">
                            {project.showUrl && (
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", duration: 0.1 }}
                                href={project.liveUrl}
                                className="w-1/2 text-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 font-medium"
                              >
                                Demo
                              </motion.a>
                            )}
                            
                            {project.showCode && (
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "tween", duration: 0.1 }}
                                href={project.githubUrl}
                                className="w-1/2 text-center px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-lg hover:bg-gray-600/50 hover:text-white transition-all duration-200 font-medium border border-gray-600/50"
                              >
                                Code
                              </motion.a>
                            )}
                            
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;