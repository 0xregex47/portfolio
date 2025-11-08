import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangleIcon } from 'lucide-react';
import { Button } from '../components/UI/Button';
export function NotFound() {
  return <div className="min-h-screen bg-[#0a0f1f] flex items-center justify-center px-4">
      <motion.div className="text-center space-y-8" initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }}>
        <div className="flex justify-center">
          <motion.div animate={{
          rotate: [0, 10, -10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <AlertTriangleIcon className="w-24 h-24 text-[#00f6ff]" />
          </motion.div>
        </div>
        <div>
          <h1 className="text-8xl font-bold text-[#00f6ff] mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-2">
            Access Denied
          </h2>
          <p className="text-gray-400 text-lg">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="pt-8">
          <Button variant="primary" onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </div>
        <div className="text-sm text-gray-500 font-mono">
          <p>&gt; Error Code: 404_NOT_FOUND</p>
          <p>&gt; Timestamp: {new Date().toISOString()}</p>
        </div>
      </motion.div>
    </div>;
}