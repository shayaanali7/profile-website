import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code, Database, Globe, Award, GraduationCap, Terminal, Wrench } from 'lucide-react';

const About: React.FC = () => {
  const languages = [
    { icon: Code, name: 'Python', desc: 'Data Science, Backend Development', years: 3 },
    { icon: Code, name: 'JavaScript', desc: 'Frontend & Backend Development', years: 2.5 },
    { icon: Code, name: 'Java', desc: 'Object-Oriented Programming', years: 2.5 },
    { icon: Code, name: 'C', desc: 'Systems Programming', years: 1.5 },
    { icon: Code, name: 'TypeScript', desc: 'Type-Safe Development', years: 1.5 },
    { icon: Code, name: 'SQL', desc: 'Database Management', years: 2 },
    { icon: Code, name: 'HTML', desc: 'Web Structure & Markup', years: 2.5 },
    { icon: Code, name: 'CSS', desc: 'Styling & Responsive Design', years: 2.5 },
    { icon: Code, name: 'Assembly', desc: 'Low-Level Programming', years: 1 },
  ];

  const frameworks = [
    { icon: Globe, name: 'React', desc: 'Frontend Development', years: 2 },
    { icon: Globe, name: 'React Query', desc: 'State Management & Data Fetching', years: 2 },
    { icon: Globe, name: 'Next.js', desc: 'Full-Stack React Framework', years: 2 },
    { icon: Globe, name: 'Node.js', desc: 'Backend Development', years: 2 },
    { icon: Database, name: 'Supabase', desc: 'Backend-as-a-Service', years: 2 },
    { icon: Database, name: 'PostgreSQL', desc: 'Relational Database', years: 1.5 },
    { icon: Terminal, name: 'Git', desc: 'Version Control', years: 3 },
    { icon: Wrench, name: 'Windows', desc: 'Operating System', years: 3 },
    { icon: Terminal, name: 'Linux', desc: 'Operating System', years: 1 }
  ];

  const achievements = [
    { icon: Award, title: 'Dean\'s List', year: '2024' },
  ];

  const getExperienceWidth = (years: number) => {
    const maxYears = 3;
    return Math.min((years / maxYears) * 100, 100);
  };

  const getExperienceLabel = (years: number) => {
    if (years < 1) {
      return `${Math.round(years * 12)} months`;
    } else if (years === 1) {
      return '1 year';
    } else if (years % 1 === 0) {
      return `${years} years`;
    } else {
      return `${years} years`;
    }
  };

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
        type: "spring" as const,
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
          className="space-y-20"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm currently pursuing my Bachelor's degree in Computer Science with a minor in Software Engineering at Western University, 
              maintaining a 3.8 GPA. My journey in tech started early, and I've been constantly learning and growing, with interests spanning full-stack development, artificial intelligence, and mobile applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-4 flex items-center justify-center">
                <Code className="mr-3 h-8 w-8 text-cyan-400" />
                Programming Languages
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <language.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{language.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{language.desc}</p>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${getExperienceWidth(language.years)}%` }}
                            transition={{ delay: index * 0.1 + 0.8, duration: 1 }}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                        <span className="text-xs text-cyan-400 mt-1 block">{getExperienceLabel(language.years)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-4 flex items-center justify-center">
                <Wrench className="mr-3 h-8 w-8 text-cyan-400" />
                Frameworks & Technologies
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.02}}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <framework.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{framework.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{framework.desc}</p>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${getExperienceWidth(framework.years)}%` }}
                            transition={{ delay: index * 0.1 + 1.2, duration: 1 }}
                            className="bg-gradient-to-r from-purple-400 to-blue-500 h-2 rounded-full relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </motion.div>
                        </div>
                        <span className="text-xs text-purple-400 mt-1 block">{getExperienceLabel(framework.years)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </h4>
                <div className="text-gray-300">
                  <p className="font-semibold text-white">Bachelor of Science in Computer Science</p>
                  <p className="text-cyan-400">Western University • 2023-2027</p>
                  <p className="mt-2">GPA: 3.8/4.0</p>
                  <p className="text-sm text-gray-400 mt-2">Minor in Software Engineering</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">Achievements</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ x: 10 }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <achievement.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white">{achievement.title}</h5>
                      <p className="text-cyan-400 text-xs">{achievement.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;