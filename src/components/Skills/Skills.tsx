import React, { useEffect, useRef, useState } from 'react';
import { useTypewriterComplete } from './hooks/useTypewriterComplete';
import { useAnimationSequence } from './hooks/useAnimationSequence';
import { SectionTitle } from './components/SectionTitle';
import { FrameworkIcon } from './components/FrameworkIcon';
import { SkillBar } from './components/SkillBar';
import { frameworks, programmingSkills } from './constants';
import { SkillsProps } from './types';

const Skills: React.FC<SkillsProps> = ({ isVisible }) => {
  // Track if we've started animations for this viewing session
  const [animationStarted, setAnimationStarted] = useState(false);
  const { markAsCompleted, isCompleted, hasRunBefore } = useTypewriterComplete(isVisible);
  const {
    currentFrameworkIndex,
    currentSkillIndex,
    startFrameworkAnimation,
    startSkillAnimation
  } = useAnimationSequence(isVisible);
  
  const animationsStartedRef = useRef(false);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    // Only run animations when section becomes visible (transition from not visible to visible)
    const becameVisible = isVisible && !wasVisibleRef.current;
    wasVisibleRef.current = isVisible;
    
    // If not visible, don't do anything
    if (!isVisible) {
      return;
    }
    
    // If section becomes visible and we've run before, show everything immediately
    if (hasRunBefore && !animationStarted) {
      // Mark all sections as completed immediately
      markAsCompleted('main');
      markAsCompleted('frameworks');
      markAsCompleted('programming');
      
      // Start animations immediately if not already started
      if (!animationsStartedRef.current) {
        startFrameworkAnimation();
        startSkillAnimation();
        animationsStartedRef.current = true;
        setAnimationStarted(true);
      }
    } else if (becameVisible && !animationStarted) {
      // For first viewing, we'll let the sequence start with the main title
      // but we need to mark that we've started the animation process
      setAnimationStarted(true);
    }
  }, [isVisible, hasRunBefore, markAsCompleted, startFrameworkAnimation, startSkillAnimation, animationStarted]);

  // Reset animation state when section is no longer visible and hasn't run before
  useEffect(() => {
    if (!isVisible && !hasRunBefore) {
      setAnimationStarted(false);
      animationsStartedRef.current = false;
    }
  }, [isVisible, hasRunBefore]);

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-20">
          <SectionTitle
            text="Technical Skills"
            className="text-4xl font-bold text-gray-800 dark:text-white"
            delay={500}
            onComplete={() => {
              if (isVisible) {
                markAsCompleted('main');
              }
            }}
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
                if (isVisible) {
                  markAsCompleted('frameworks');
                  startFrameworkAnimation();
                }
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
        {isCompleted('frameworks') && currentFrameworkIndex >= 0 && (
          <div>
            <SectionTitle
              text="Programming Languages"
              className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-12"
              delay={500}
              onComplete={() => {
                if (isVisible) {
                  markAsCompleted('programming');
                  startSkillAnimation();
                }
              }}
              isCompleted={isCompleted('programming')}
            />
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {programmingSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  isVisible={currentSkillIndex >= index}
                  index={index} 
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