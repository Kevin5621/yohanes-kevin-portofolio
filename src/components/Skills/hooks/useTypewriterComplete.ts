import { useState, useEffect } from 'react';

export const useTypewriterComplete = (isVisible: boolean) => {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isVisible) {
      setCompletedSections(new Set());
    }
  }, [isVisible]);

  const markAsCompleted = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
  };

  const isCompleted = (sectionId: string) => {
    return completedSections.has(sectionId);
  };

  return {
    markAsCompleted,
    isCompleted
  };
};