import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShieldIcon } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black/60 border-t border-[#00f6ff]/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-5 h-5 text-[#00f6ff]" />
            <span className="text-gray-400 text-sm">
              © {currentYear} Srivatsa. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Built with</span>
            <motion.div animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity
          }}>
              <HeartIcon className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and React</span>
          </div>
          <div className="text-gray-400 text-sm">
            <span className="text-[#00f6ff]">Secured</span> by Design
          </div>
        </div>
      </div>
    </footer>;
}