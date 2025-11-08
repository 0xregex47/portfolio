import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DecryptedText } from './DecryptedText';
interface AboutProps {
  mousePosition: {
    x: number;
    y: number;
  };
  scrollY: number;
}
export function About({
  mousePosition,
  scrollY
}: AboutProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  return <section id="about" ref={ref} className="min-h-screen flex flex-col justify-center items-center py-20 px-6 relative" style={{
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 100, 200, 0.4), rgba(10, 15, 31, 1) 70%)`
  }}>
      <motion.div className="max-w-5xl mx-auto text-center" initial={{
      opacity: 0
    }} animate={{
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 100
    }} transition={{
      duration: 0.8
    }}>
        {/* Title Section */}
        <motion.h2 className="text-4xl md:text-5xl font-bold mb-16 inline-block relative" animate={{
        rotateY: scrollY > 500 && scrollY < 800 ? [0, 360] : 0
      }} transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }}>
          <DecryptedText text="About Me" animateOn="view" revealDirection="center" />
          <motion.div className="absolute -bottom-2 left-0 h-1 bg-[#00f6ff]" initial={{
          width: 0
        }} animate={{
          width: inView ? '100%' : 0
        }} transition={{
          duration: 1,
          delay: 0.5
        }} />
        </motion.h2>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div className="relative" animate={{
          x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 20 * -1,
          y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 20 * -1
        }} transition={{
          type: 'spring',
          stiffness: 75,
          damping: 15
        }}>
            <div className="aspect-square rounded-xl overflow-hidden relative shadow-lg shadow-blue-900/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 mix-blend-overlay"></div>
              <img src="https://lh3.googleusercontent.com/gg/AIJ2gl_18BqcvXfGxSJZ9imTPZWTKD4JgkrULWukA6ykeo24kv21zbN1hoeV6XD6QHduNmj4nMF2bcSpMMHuChp8zH29rXl4wXEDUVsCv_IPQtcSPiRQ3DddGlOfXY7V4Rp04WawH4wJTqJkM26Ny4SAaMXZI95uUSqODc7LtiSYvbXG0Sd7Z8vB1a3q-c6NNsYiFw-xIv8c6FKTlOYrRuXK6lsJQzCsUnE-_LZb1LinnfHs3RTlLhBVPsKAajS1VyQrzBOV6uznaeYo-bv6NarbMSlJZQvxcbQVrM1PvlsA-mcTXtvgfbrM1R9NwGtswI2N6kSvh7T7bwu1Xrhojyy4I359=s1024-rj" alt="Srivatsa - Cybersecurity Architect" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div className="text-left space-y-10 leading-loose tracking-wide" initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: inView ? 1 : 0,
          x: inView ? 0 : 50
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }}>
            <p className="text-gray-300 text-lg md:text-xl">
              Hi there! I'm Srivatsa, a cybersecurity Engineer driven by
              curiosity and a mission to secure the digital world through
              precision, analysis, and innovation.
            </p>

            <p className="text-gray-300 text-lg md:text-xl">
              My experience spans offensive security, infrastructure hardening,
              and incident response — blending proactive and reactive
              disciplines to defend modern enterprises.
            </p>

            <p className="text-gray-300 text-lg md:text-xl">
              I merge adversarial thinking with research to transform complex
              attack surfaces into actionable insights, strengthening systems
              against evolving cyber threats.
            </p>

            {/* Resume Button */}
            <motion.button className="border border-[#00f6ff] text-[#00f6ff] hover:bg-[#00f6ff] hover:text-[#0a0f1f] font-semibold py-3 px-8 rounded-full transition-colors mt-10 text-lg shadow-md shadow-cyan-900/30" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <DecryptedText text="Download Resume" animateOn="hover" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>;
}