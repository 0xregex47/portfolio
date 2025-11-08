import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, ShieldIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Certifications',
    href: '#certifications'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0f1f]/95 backdrop-blur-md shadow-lg shadow-[#00f6ff]/10' : 'bg-transparent'}`} initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{
          scale: 1.05
        }} onClick={() => scrollToSection('#home')}>
            <ShieldIcon className="w-8 h-8 text-[#00f6ff]" />
            <span className="text-xl font-bold text-white">Srivatsa</span>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <motion.button key={link.name} onClick={() => scrollToSection(link.href)} className="text-gray-300 hover:text-[#00f6ff] transition-colors relative group" whileHover={{
            y: -2
          }}>
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f6ff] group-hover:w-full transition-all duration-300" />
              </motion.button>)}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <motion.div className="md:hidden bg-[#0a0f1f]/98 backdrop-blur-md border-t border-[#00f6ff]/20" initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="block w-full text-left text-gray-300 hover:text-[#00f6ff] transition-colors py-2">
                {link.name}
              </button>)}
          </div>
        </motion.div>}
    </motion.nav>;
}