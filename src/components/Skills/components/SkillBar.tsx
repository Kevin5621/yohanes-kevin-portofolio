import { motion } from 'framer-motion';
import { SkillBarProps } from '../types';

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {level}%
      </span>
    </div>
    <div className="w-full h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 shadow-neumorph-inset dark:shadow-neumorph-dark-inset">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: isVisible ? `${level}%` : '0%' }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </motion.div>
);