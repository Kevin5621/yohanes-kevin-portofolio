import { useState, useEffect, useRef } from 'react';
import { frameworks, programmingSkills } from '../constants';

export const useAnimationSequence = (isVisible: boolean) => {
  const [currentFrameworkIndex, setCurrentFrameworkIndex] = useState(-1);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(-1);
  const hasAnimatedRef = useRef(false);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up any running animations when component unmounts or visibility changes
  useEffect(() => {
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []);

  // Reset animations when visibility changes
  useEffect(() => {
    if (!isVisible) {
      // Only reset if we haven't animated before
      if (!hasAnimatedRef.current) {
        setCurrentFrameworkIndex(-1);
        setCurrentSkillIndex(-1);
        
        // Clear any running animations
        if (animationIntervalRef.current) {
          clearInterval(animationIntervalRef.current);
          animationIntervalRef.current = null;
        }
      }
    }
  }, [isVisible]);

  const startFrameworkAnimation = () => {
    // Only start animation if not already showing all frameworks AND section is visible
    if (currentFrameworkIndex < frameworks.length - 1 && isVisible) {
      // Clear any existing animation
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      
      let index = 0;
      animationIntervalRef.current = setInterval(() => {
        if (index >= frameworks.length) {
          if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
          }
          return;
        }
        setCurrentFrameworkIndex(index);
        index++;
      }, 100);
    }
  };

  const startSkillAnimation = () => {
    // Only start animation if not already showing all skills AND section is visible
    if (currentSkillIndex < programmingSkills.length - 1 && isVisible) {
      hasAnimatedRef.current = true; // Mark that we've animated
      
      // Clear any existing animation
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
      
      let index = 0;
      animationIntervalRef.current = setInterval(() => {
        if (index >= programmingSkills.length) {
          if (animationIntervalRef.current) {
            clearInterval(animationIntervalRef.current);
            animationIntervalRef.current = null;
          }
          return;
        }
        setCurrentSkillIndex(index);
        index++;
      }, 300);
    }
  };

  return {
    currentFrameworkIndex,
    currentSkillIndex,
    startFrameworkAnimation,
    startSkillAnimation
  };
};