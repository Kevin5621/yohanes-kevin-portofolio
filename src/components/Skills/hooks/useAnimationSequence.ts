import { useState, useEffect } from 'react';
import { frameworks, programmingSkills } from '../constants';

export const useAnimationSequence = (isVisible: boolean) => {
  const [currentFrameworkIndex, setCurrentFrameworkIndex] = useState(-1);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(-1);

  useEffect(() => {
    if (!isVisible) {
      setCurrentFrameworkIndex(-1);
      setCurrentSkillIndex(-1);
    }
  }, [isVisible]);

  const startFrameworkAnimation = () => {
    const interval = setInterval(() => {
      setCurrentFrameworkIndex(prev => {
        if (prev + 1 >= frameworks.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 100);
  };

  const startSkillAnimation = () => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(prev => {
        if (prev + 1 >= programmingSkills.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
  };

  return {
    currentFrameworkIndex,
    currentSkillIndex,
    startFrameworkAnimation,
    startSkillAnimation
  };
};