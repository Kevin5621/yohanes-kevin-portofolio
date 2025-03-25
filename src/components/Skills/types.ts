import { IconType } from 'react-icons';

export interface SkillsProps {
  isVisible: boolean;
}

export interface FrameworkIconProps {
  Icon: IconType;
  name: string;
  color: string;
  index: number;
  isActive: boolean;
}

export interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  isVisible: boolean;
  index?: number;
}

export interface SectionTitleProps {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
  isCompleted: boolean;
}

export interface Framework {
  name: string;
  icon: IconType;
  color: string;
}

export interface ProgrammingSkill {
  name: string;
  level: number;
  color: string;
}