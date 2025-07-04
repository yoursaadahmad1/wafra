'use client';

import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Wifi, Zap } from 'lucide-react';

interface Server3DProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Server3DIllustration({ className = '', size = 'md', animated = true }: Server3DProps) {
  const sizeClasses = {
    sm: 'w-32 h-40',
    md: 'w-48 h-60',
    lg: 'w-64 h-80'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Main Server Body */}
      <motion.div
        className="server-3d rounded-2xl w-full h-full relative overflow-hidden"
        initial={animated ? { rotateY: -15, rotateX: 10 } : {}}
        animate={animated ? { 
          rotateY: [-15, 15, -15],
          rotateX: [10, -5, 10],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Server Front Panel */}
        <div className="absolute inset-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl border border-slate-600">
          {/* Status Lights */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-green-400"
              animate={animated ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-blue-400"
              animate={animated ? { opacity: [0.3, 1, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-400"
              animate={animated ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Server Slots */}
          <div className="absolute top-12 left-4 right-4 space-y-2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="h-4 bg-slate-700 rounded border-l-4 border-blue-400 relative overflow-hidden"
                initial={animated ? { opacity: 0.7 } : {}}
                animate={animated ? { opacity: [0.7, 1, 0.7] } : {}}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
              >
                {/* Data Flow Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                  animate={animated ? { x: ['-100%', '100%'] } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Icons */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <motion.div
              animate={animated ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Cpu className="w-4 h-4 text-purple-400" />
            </motion.div>
            <motion.div
              animate={animated ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <HardDrive className="w-4 h-4 text-green-400" />
            </motion.div>
            <motion.div
              animate={animated ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Wifi className="w-4 h-4 text-blue-400" />
            </motion.div>
          </div>
        </div>

        {/* Side Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50" />
      </motion.div>

      {/* Floating Particles */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}