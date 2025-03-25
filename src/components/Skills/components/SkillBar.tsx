import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { SkillBarProps } from '../types';

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, isVisible, index = 0 }) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const hasRunBeforeRef = useRef(false); // Track if animation has run before

  // Start typewriter effect with a staggered delay based on index
  useEffect(() => {
    // If animation has run before, show immediately
    if (hasRunBeforeRef.current) {
      setShowTypewriter(true);
      return;
    }
    
    if (isVisible && !showTypewriter) {
      const timer = setTimeout(() => {
        setShowTypewriter(true);
        hasRunBeforeRef.current = true; // Remember we've shown the typewriter
      }, index * 200); // Stagger the typewriter start times
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, index, showTypewriter]);

  // Start the percentage counter animation
  useEffect(() => {
    // If animation has run before and we're visible again, show final state immediately
    if (isVisible && hasRunBeforeRef.current && !hasAnimated) {
      setHasAnimated(true);
      setDisplayValue(level);
      return;
    }
    
    if (isVisible && showTypewriter && !hasAnimated) {
      // Small delay after typewriter starts
      const timer = setTimeout(() => {
        setHasAnimated(true);
        hasRunBeforeRef.current = true; // Remember we've animated
        
        // Start the counter animation
        const controls = animate(count, level, { 
          duration: 1.5,
          onUpdate: latest => {
            setDisplayValue(Math.round(latest));
          }
        });
        
        animationRef.current = controls;
        return () => controls.stop();
      }, 500);
      
      return () => clearTimeout(timer);
    }
    
    // Clean up animation when component unmounts or becomes invisible
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [isVisible, showTypewriter, hasAnimated, count, level]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        {showTypewriter || hasRunBeforeRef.current ? (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {name}
          </span>
        ) : (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0">
            {name}
          </span>
        )}
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {displayValue}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 shadow-neumorph-inset dark:shadow-neumorph-dark-inset">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hasAnimated ? `${level}%` : '0%' }}
          transition={{ duration: 1.5 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
};