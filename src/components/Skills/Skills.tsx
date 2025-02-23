import React from 'react';
import { useTypewriterComplete } from './hooks/useTypewriterComplete';
import { useAnimationSequence } from './hooks/useAnimationSequence';
import { SectionTitle } from './components/SectionTitle';
import { FrameworkIcon } from './components/FrameworkIcon';
import { SkillBar } from './components/SkillBar';
import { frameworks, programmingSkills } from './constants';
import { SkillsProps } from './types';

const Skills: React.FC<SkillsProps> = ({ isVisible }) => {
  const { markAsCompleted, isCompleted } = useTypewriterComplete(isVisible);
  const {
    currentFrameworkIndex,
    currentSkillIndex,
    startFrameworkAnimation,
    startSkillAnimation
  } = useAnimationSequence(isVisible);

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <SectionTitle
            text="Technical Skills"
            className="text-4xl font-bold text-gray-800 dark:text-white"
            delay={500}
            onComplete={() => markAsCompleted('main')}
            isCompleted={isCompleted('main')}
          />
        </div>

        {/* Frameworks & Tools */}
        {isCompleted('main') && (
          <div className="mb-24">
            <SectionTitle
              text="Framework & Tools"
              className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-12"
              delay={0}
              onComplete={() => {
                markAsCompleted('frameworks');
                startFrameworkAnimation();
              }}
              isCompleted={isCompleted('frameworks')}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {frameworks.map((framework, index) => (
                <FrameworkIcon
                  key={framework.name}
                  Icon={framework.icon}
                  name={framework.name}
                  color={framework.color}
                  index={index}
                  isActive={currentFrameworkIndex >= index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Programming Languages */}
        {isCompleted('frameworks') && currentFrameworkIndex === frameworks.length - 1 && (
          <div>
            <SectionTitle
              text="Programming Languages"
              className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-12"
              delay={500}
              onComplete={() => {
                markAsCompleted('programming');
                startSkillAnimation();
              }}
              isCompleted={isCompleted('programming')}
            />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {programmingSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  isVisible={currentSkillIndex >= index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;