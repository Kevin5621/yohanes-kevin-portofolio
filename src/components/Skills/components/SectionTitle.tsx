import { Typewriter } from '../../hooks/Animated_typeWritter';
import { SectionTitleProps } from '../types';
import { useEffect, useState } from 'react';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className,
  delay = 0,
  onComplete,
  isCompleted
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // Only start animation when component is mounted and not completed
    if (!isCompleted) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isCompleted]);

  if (isCompleted) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
    <>
      {shouldAnimate ? (
        <Typewriter
          text={text}
          className={className}
          delay={delay}
          speed={50}
          onComplete={onComplete}
        />
      ) : (
        <h2 className={`${className} opacity-0`}>{text}</h2>
      )}
    </>
  );
};