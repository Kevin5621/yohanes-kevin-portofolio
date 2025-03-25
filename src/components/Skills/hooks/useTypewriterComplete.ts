import { useState, useEffect } from 'react';

export const useTypewriterComplete = (isVisible: boolean) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [hasRunBefore, setHasRunBefore] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      // Only reset sections if we haven't run the animation before
      if (!hasRunBefore) {
        setCompletedSections(new Set());
      }
    } else if (isVisible && !hasRunBefore) {
      // Mark that we've run the animation at least once
      setHasRunBefore(true);
    }
  }, [isVisible, hasRunBefore]);

  const markAsCompleted = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
  };

  const isCompleted = (sectionId: string) => {
    return completedSections.has(sectionId);
  };

  return {
    markAsCompleted,
    isCompleted,
    hasRunBefore
  };
};