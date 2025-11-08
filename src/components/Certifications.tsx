import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DecryptedText } from './DecryptedText';
import { SectionTitle } from './UI/SectionTitle';
import { AwardIcon, CheckCircleIcon } from 'lucide-react';
import certificationsData from '../assets/data/certifications.json';
export function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return <section id="certifications" ref={ref} className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Certifications" inView={inView} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certificationsData.map((cert, index) => <motion.div key={index} className="bg-black/40 backdrop-blur-sm border border-[#00f6ff]/20 rounded-lg p-6 hover:border-[#00f6ff]/60 transition-all group" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05
        }}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#00f6ff]/10 rounded-lg group-hover:bg-[#00f6ff]/20 transition-colors">
                  <AwardIcon className="w-8 h-8 text-[#00f6ff]" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-bold text-white">
                    <DecryptedText text={cert.name} animateOn="view" />
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-[#00f6ff]">
                    <CheckCircleIcon className="w-4 h-4" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.credentialId && <p className="text-xs text-gray-500">
                      ID: {cert.credentialId}
                    </p>}
                  <div className="pt-2">
                    <span className={`text-xs px-3 py-1 rounded-full ${cert.level === 'Advanced' ? 'bg-red-500/10 text-red-400 border border-red-500/30' : cert.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30' : 'bg-green-500/10 text-green-400 border border-green-500/30'}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}