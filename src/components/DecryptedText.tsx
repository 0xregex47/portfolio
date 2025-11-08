import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface DecryptedTextProps {
  text: string;
  animateOn?: 'view' | 'hover' | 'immediate';
  revealDirection?: 'left' | 'right' | 'center';
  className?: string;
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
export function DecryptedText({
  text,
  animateOn = 'view',
  revealDirection = 'left',
  className = ''
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text.split('').map(() => '█'));
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const shouldAnimate = animateOn === 'immediate' || animateOn === 'view' && inView || animateOn === 'hover' && isHovered;
  useEffect(() => {
    if (!shouldAnimate) return;
    let iterations = 0;
    const maxIterations = 10; // smaller = faster
    const intervalSpeed = 10; // smaller = faster (was 30ms)
    const increment = 2; // higher = faster reveal (was 0.5)

    const interval = setInterval(() => {
      setDisplayText(prev => prev.map((_, index) => {
        if (iterations > index) {
          return text[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }));
      iterations += increment;
      if (iterations > text.length + maxIterations) {
        clearInterval(interval);
        setDisplayText(text.split(''));
      }
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [shouldAnimate, text]);
  return <span ref={ref} className={`inline-block ${className}`} onMouseEnter={() => animateOn === 'hover' && setIsHovered(true)} onMouseLeave={() => animateOn === 'hover' && setIsHovered(false)}>
      {displayText.map((char, index) => <motion.span key={index} initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.05,
      delay: index * 0.01
    }} className="inline-block">
          {char}
        </motion.span>)}
    </span>;
}