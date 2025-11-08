import React from 'react';
import { motion } from 'framer-motion';
import { DecryptedText } from '../DecryptedText';
interface SectionTitleProps {
  title: string;
  inView: boolean;
}
export function SectionTitle({
  title,
  inView
}: SectionTitleProps) {
  return <motion.div className="text-center mb-12" initial={{
    opacity: 0,
    y: 30
  }} animate={inView ? {
    opacity: 1,
    y: 0
  } : {}} transition={{
    duration: 0.8
  }}>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block relative">
        <DecryptedText text={title} animateOn="view" revealDirection="center" />
        <motion.div className="absolute -bottom-2 left-0 h-1 bg-[#00f6ff]" initial={{
        width: 0
      }} animate={{
        width: inView ? '100%' : 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }} />
      </h2>
    </motion.div>;
}