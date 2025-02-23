import { Typewriter } from '../../hooks/Animated_typeWritter';
import { SectionTitleProps } from '../types';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  className,
  delay = 0,
  onComplete,
  isCompleted
}) => {
  if (isCompleted) {
    return <h2 className={className}>{text}</h2>;
  }

  return (
    <Typewriter
      text={text}
      className={className}
      delay={delay}
      speed={50}
      onComplete={onComplete}
    />
  );
};