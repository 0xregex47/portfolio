import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}
export function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center';
  const variantStyles = {
    primary: 'bg-[#00f6ff] text-[#0a0f1f] hover:bg-[#00d4dd] shadow-lg shadow-[#00f6ff]/30',
    secondary: 'bg-[#0a0f1f] text-[#00f6ff] border-2 border-[#00f6ff] hover:bg-[#00f6ff]/10',
    outline: 'border border-[#00f6ff] text-[#00f6ff] hover:bg-[#00f6ff] hover:text-[#0a0f1f]'
  };
  return <motion.button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} whileHover={!disabled ? {
    scale: 1.05
  } : {}} whileTap={!disabled ? {
    scale: 0.95
  } : {}}>
      {children}
    </motion.button>;
}