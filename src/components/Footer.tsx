import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-900 text-white py-16 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Code2 className="h-10 w-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg"></div>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Muhammad Shayaan Ali
                </h3>
                <p className="text-cyan-400 text-sm">Computer Science Student @Western University</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 max-w-md leading-relaxed mb-6"
            >
              Passionate about creating innovative solutions and building the future through technology. 
              Always learning, always growing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
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
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/projects', label: 'Projects' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 ease-out hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-semibold text-white mb-4"
            >
              Get In Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 text-sm"
            >
              <p className="text-gray-400">
                <span className="text-cyan-400">Email:</span><br />
                shayaanali7@email.com
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Location:</span><br />
                London Ontario, CA
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">Status:</span><br />
                <span className="text-green-400">Available for opportunities</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;