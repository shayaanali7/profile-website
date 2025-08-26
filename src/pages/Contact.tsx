import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 3000);
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
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Let's connect and build something amazing together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-3xl font-semibold text-white mb-6 flex items-center">
                  <MessageCircle className="mr-3 h-8 w-8 text-cyan-400" />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </motion.div>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Project Discussion"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitted
                        ? 'bg-green-600 text-white'
                        : isSubmitting
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ 
                            duration: 1, 
                            repeat: Infinity, 
                            ease: "linear" as const
                          }}
                          className="h-5 w-5 border-2 border-gray-300 border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-3xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      value: 'shayaanali7@email.com',
                      description: "I'll respond within 24 hours",
                      color: 'from-cyan-500 to-blue-500'
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      value: '+1 (548) 468-4056',
                      description: 'Available Mon-Fri, 9AM-6PM EST',
                      color: 'from-green-500 to-emerald-500'
                    },
                    {
                      icon: MapPin,
                      title: 'Location',
                      value: 'London ON, CA',
                      description: 'Open to remote opportunities',
                      color: 'from-purple-500 to-pink-500'
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${contact.color} bg-opacity-20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className={`h-6 w-6 bg-gradient-to-r ${contact.color} bg-clip-text text-transparent`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-white">{contact.title}</h4>
                        <p className="text-cyan-400 font-medium">{contact.value}</p>
                        <p className="text-sm text-gray-400 mt-1">{contact.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h4 className="text-xl font-medium text-white mb-5">Follow Me</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Github, href: "https://github.com/shayaanali7", label: "GitHub", color: "hover:bg-gray-700" },
                    { icon: Linkedin, href: "https://linkedin.com/in/muhammadshayaanali", label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: Instagram, href: "https://www.instagram.com/shayaanali7/#", label: "Instagram", color: "hover:bg-purple-500" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.8, 
                        type: "spring" as const,
                        stiffness: 100 
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group p-4 bg-gray-700/50 rounded-xl ${social.color} transition-all duration-300 flex flex-col items-center space-y-2`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;