import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DecryptedText } from './DecryptedText';
import { SectionTitle } from './UI/SectionTitle';
import { Button } from './UI/Button';
import { MailIcon, LinkedinIcon, GithubIcon, TwitterIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const socialLinks = [{
    icon: LinkedinIcon,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  }, {
    icon: GithubIcon,
    href: 'https://github.com',
    label: 'GitHub'
  }, {
    icon: TwitterIcon,
    href: 'https://twitter.com',
    label: 'Twitter'
  }, {
    icon: MailIcon,
    href: 'mailto:contact@example.com',
    label: 'Email'
  }];
  return <section id="contact" ref={ref} className="min-h-screen py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Get In Touch" inView={inView} />
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <DecryptedText text="Let's Connect" animateOn="view" />
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing cybersecurity projects,
                collaboration opportunities, or just connecting with fellow
                security enthusiasts. Feel free to reach out!
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#00f6ff]">
                Find me on:
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/40 border border-[#00f6ff]/20 rounded-lg hover:border-[#00f6ff] hover:bg-[#00f6ff]/10 transition-all group" whileHover={{
                scale: 1.1,
                y: -5
              }} whileTap={{
                scale: 0.95
              }}>
                    <social.icon className="w-6 h-6 text-gray-400 group-hover:text-[#00f6ff]" />
                  </motion.a>)}
              </div>
            </div>
            <div className="p-6 bg-black/40 border border-[#00f6ff]/20 rounded-lg">
              <p className="text-sm text-gray-400">
                <span className="text-[#00f6ff] font-semibold">
                  Response Time:
                </span>{' '}
                Typically within 24-48 hours
              </p>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} className="space-y-6" initial={{
          opacity: 0,
          x: 50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input type="text" value={formData.name} onChange={e => setFormData({
              ...formData,
              name: e.target.value
            })} className="w-full px-4 py-3 bg-black/40 border border-[#00f6ff]/20 rounded-lg text-white focus:outline-none focus:border-[#00f6ff] transition-colors" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input type="email" value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-4 py-3 bg-black/40 border border-[#00f6ff]/20 rounded-lg text-white focus:outline-none focus:border-[#00f6ff] transition-colors" placeholder="your.email@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea value={formData.message} onChange={e => setFormData({
              ...formData,
              message: e.target.value
            })} className="w-full px-4 py-3 bg-black/40 border border-[#00f6ff]/20 rounded-lg text-white focus:outline-none focus:border-[#00f6ff] transition-colors resize-none" placeholder="Your message..." rows={5} required />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              <SendIcon className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>;
}