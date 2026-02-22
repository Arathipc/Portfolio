import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'arathi.pc.02@gmail.com',
      href: 'mailto:arathi.pc.02@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8078511686',
      href: 'tel:+91 8078511686'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kannur, Kerala, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
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
            Get In Touch
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-emerald-400' : 'bg-emerald-500'
          }`}></div>
          <p className={`mt-4 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'd love to hear from you. Let's discuss your next project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Connect
              </h3>
              <p className={`leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-4 rounded-xl transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800'
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`p-3 rounded-lg mr-4 ${
                    darkMode ? 'bg-emerald-500/20' : 'bg-emerald-100'
                  }`}>
                    <info.icon className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              darkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  <CheckCircle className="mr-2" size={20} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                >
                  <AlertCircle className="mr-2" size={20} />
                  Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div> 
        </div>
    </section>
  );
};

export default Contact;