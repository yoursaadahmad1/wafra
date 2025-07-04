'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail
      setTrails(prev => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-mode-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className={`w-5 h-5 rounded-full ${
          isHovering 
            ? 'bg-gradient-to-r from-pink-500 to-violet-500' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`} />
      </motion.div>

      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ x: trail.x - 4, y: trail.y - 4, opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
        >
          <div className="w-2 h-2 rounded-full bg-blue-400/30" />
        </motion.div>
      ))}
    </>
  );
}