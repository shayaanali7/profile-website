import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    MSA
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                </div>
              </div>

              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" as const }}
              >
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-7xl font-bold"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring" as const, 
                stiffness: 100, 
                damping: 15,
                delay: 0.5 
              }}
            >
              <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Muhammad Shayaan Ali
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <h2 className="text-2xl sm:text-3xl text-cyan-400 font-medium mb-4">
                Computer Science Student
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate about creating innovative software solutions and exploring 
              the endless possibilities of technology. Building the future, one line of code at a time.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: "https://github.com/shayaanali7", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/muhammadshayaanali", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shayaanali7@email.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-100"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>

            <motion.a
              href="/Muhammad Shayaan Ali Resume.pdf"
              download="Muhammad_Shayaan_Ali_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-transparent border-2 border-gray-600 text-gray-300 font-medium rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;