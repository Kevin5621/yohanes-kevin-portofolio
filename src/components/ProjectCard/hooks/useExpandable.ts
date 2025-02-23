import { useState, useRef, useEffect } from 'react';

export const useExpandable = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setIsAnimating(true);
      const height = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
      setContentHeight(height);

      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return {
    isExpanded,
    setIsExpanded,
    contentHeight,
    contentRef,
    isAnimating
  };
};