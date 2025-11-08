import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDownIcon } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const terminalLines = [{
  text: '> Initializing Google Quantum Core...',
  delay: 0
}, {
  text: '> Connecting to CyberDefense Grid...',
  delay: 800
}, {
  text: '> quantum-login --user srivatsa_dev-sec',
  delay: 1600
}, {
  text: '> Authenticating... ✅',
  delay: 2400
}, {
  text: '> Access granted.',
  delay: 3000
}, {
  text: '> Loading neural firewall module...',
  delay: 3600
}, {
  text: '> Calibrating quantum keys...',
  delay: 4400
}, {
  text: '> Profile: Srivatsa | Cybersecurity Architect | Offensive Security | Threat Modeling | AI-driven Defense',
  delay: 5200
}, {
  text: '> System Ready. Scroll to proceed ↓',
  delay: 6400
}];
export function QuantumBoot() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, line.delay);
    });
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        opacity: 0,
        y: -100
      });
    }
  }, []);
  return <motion.section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center px-4 relative" initial={{
    backgroundColor: '#000000'
  }} animate={{
    backgroundColor: '#0a0f1f'
  }} transition={{
    duration: 2,
    delay: 1
  }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(0,246,255,0.3) 0%, transparent 70%)',
        filter: 'blur(60px)'
      }} initial={{
        scale: 0,
        x: '-50%',
        y: '-50%'
      }} animate={{
        scale: 1.5
      }} transition={{
        duration: 3,
        delay: 0.5
      }} />
      </div>
      <div className="max-w-3xl w-full bg-black/40 backdrop-blur-sm border border-[#00f6ff]/20 rounded-lg p-8 shadow-2xl shadow-[#00f6ff]/10 z-10">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00f6ff]/20">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-[#00f6ff] text-sm">
            quantum-terminal@srivatsa
          </span>
        </div>
        <div className="space-y-3">
          {terminalLines.map((line, index) => <motion.div key={index} initial={{
          opacity: 0,
          x: -20
        }} animate={visibleLines.includes(index) ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3
        }} className={`text-sm md:text-base ${line.text.includes('✅') ? 'text-green-400' : line.text.includes('System Ready') ? 'text-[#00f6ff] font-bold text-lg' : 'text-gray-300'}`}>
              {line.text}
              {visibleLines.includes(index) && index === visibleLines.length - 1 && <motion.span className="inline-block w-2 h-4 bg-[#00f6ff] ml-1" animate={{
            opacity: [1, 0]
          }} transition={{
            duration: 0.8,
            repeat: Infinity
          }} />}
            </motion.div>)}
        </div>
      </div>
      {visibleLines.length === terminalLines.length && <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1,
      delay: 0.5
    }} className="absolute bottom-12">
          <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
            <ChevronDownIcon className="w-8 h-8 text-[#00f6ff]" />
          </motion.div>
        </motion.div>}
    </motion.section>;
}