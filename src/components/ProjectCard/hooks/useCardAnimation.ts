import { useState, useEffect, useCallback } from 'react';
import { CardAnimationState } from '../types';

export const useCardAnimation = (
  isVisible: boolean,
  title: string,
  description: string,
  technologies: string[],
  hasAnimatedTech: React.MutableRefObject<boolean>
) => {
  const [state, setState] = useState<CardAnimationState>({
    showTitle: false,
    showDescription: false,
    showReadMore: false,
    showTechnologies: false,
    showImage: false,
    showContent: false,
    showNavButtons: false,
    buttonsVisible: false,
    titleFinished: false,
    descriptionFinished: false,
    readMoreFinished: false,
    technologiesFinished: false,
    cardVisible: false,
  });

  const animateTechnologies = useCallback(() => {
    if (technologies.length > 0 && !hasAnimatedTech.current) {
      const processSequentialTech = (index: number) => {
        if (index < technologies.length) {
          setState(prev => ({ ...prev, currentTechIndex: index }));
  
          setTimeout(() => {
            const techTextLength = technologies[index].length;
            const typewriterDelay = techTextLength * 50;
  
            setTimeout(() => {
              processSequentialTech(index + 1);
            }, typewriterDelay);
  
            if (index === technologies.length - 1) {
              setTimeout(() => {
                setState(prev => ({ ...prev, technologiesFinished: true }));
                hasAnimatedTech.current = true;
              }, typewriterDelay);
            }
          }, 300);
        }
      };
  
      processSequentialTech(0);
    }
  }, [technologies, hasAnimatedTech]);

  useEffect(() => {
    if (isVisible) {
      const animationSequence = async () => {
        setState(prev => ({ ...prev, cardVisible: true }));
  
        const baseDelay = 100;
  
        setState(prev => ({ ...prev, showTitle: true }));
        await new Promise(resolve => setTimeout(resolve, title.length * 30));
        setState(prev => ({ ...prev, titleFinished: true }));
  
        setState(prev => ({ ...prev, showDescription: true }));
        await new Promise(resolve => setTimeout(resolve, description.length * 10));
        setState(prev => ({ ...prev, descriptionFinished: true }));
  
        setState(prev => ({ ...prev, showReadMore: true }));
        await new Promise(resolve => setTimeout(resolve, 500));
        setState(prev => ({ ...prev, readMoreFinished: true }));
  
        await new Promise(resolve => {
          setState(prev => ({ ...prev, showTechnologies: true }));
          animateTechnologies();
          setTimeout(resolve, technologies.length * 150 + baseDelay * 2);
        });
        setState(prev => ({ ...prev, technologiesFinished: true }));
  
        await new Promise(resolve => {
          setTimeout(() => setState(prev => ({ ...prev, showImage: true })), baseDelay);
          setTimeout(() => setState(prev => ({ ...prev, showNavButtons: true })), baseDelay * 3);
          setTimeout(() => {
            setState(prev => ({ ...prev, showContent: true }));
            resolve(null);
          }, baseDelay * 4);
        });

        await new Promise(resolve => {
          setTimeout(() => {
            setState(prev => ({ ...prev, buttonsVisible: true }));
            resolve(null);
          }, baseDelay * 6);
        });
      };
  
      const initialDelay = setTimeout(animationSequence, 200);
      return () => clearTimeout(initialDelay);
    }
  }, [isVisible, title.length, description.length, technologies.length, animateTechnologies]);

  return { state, setState };
};