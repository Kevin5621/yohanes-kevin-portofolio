import { useState, useEffect, useCallback } from 'react';

interface AnimationProps {
  title: string;
  description: string;
  isVisible: boolean;
  technologies?: string[];
  technologiesLength?: number;
}

export const useAnimationSequence = ({
  title,
  description,
  isVisible,
  technologies = [],
}: AnimationProps) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [titleFinished, setTitleFinished] = useState(false);
  const [descriptionFinished, setDescriptionFinished] = useState(false);
  const [readMoreFinished, setReadMoreFinished] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(-1);
  const [technologiesFinished, setTechnologiesFinished] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const [, setCardVisible] = useState(false);

  const animateTechnologies = useCallback(() => {
    if (technologies.length > 0) {
      const processSequentialTech = (index: number) => {
        if (index < technologies.length) {
          setCurrentTechIndex(index);
          setTimeout(() => {
            const techTextLength = technologies[index].length;
            const typewriterDelay = techTextLength * 50;
            setTimeout(() => {
              processSequentialTech(index + 1);
            }, typewriterDelay);
            if (index === technologies.length - 1) {
              setTimeout(() => setTechnologiesFinished(true), typewriterDelay);
            }
          }, 300);
        }
      };
      processSequentialTech(0);
    }
  }, [technologies]);

  useEffect(() => {
    if (isVisible) {
      const animationSequence = async () => {
        // Initial card visibility
        setCardVisible(true);
  
        // Staggered animation delays
        const baseDelay = 100;
  
        // Title animation
        setShowTitle(true);
        await new Promise(resolve => setTimeout(resolve, title.length * 30));
        setTitleFinished(true);
  
        // Description animation (faster speed)
        setShowDescription(true);
        await new Promise(resolve => setTimeout(resolve, description.length * 10));
        setDescriptionFinished(true);
  
        // Read more animation
        setShowReadMore(true);
        await new Promise(resolve => setTimeout(resolve, 500));
        setReadMoreFinished(true);
  
        // Technologies animation with more noticeable progression
        await new Promise(resolve => {
          setShowTechnologies(true);
          animateTechnologies();
          setTimeout(resolve, technologies.length * 150 + baseDelay * 2);
        });
        setTechnologiesFinished(true);
  
        // Image and final elements with staggered delays
        await new Promise(resolve => {
          // Stagger the appearance of different elements
          const imageDelay = setTimeout(() => {
            setShowImage(true);
          }, baseDelay);
  
          const navButtonsDelay = setTimeout(() => {
            setShowNavButtons(true);
          }, baseDelay * 3);
  
          const contentDelay = setTimeout(() => {
            setShowContent(true);
            resolve(null);
          }, baseDelay * 4);
  
          return () => {
            clearTimeout(imageDelay);
            clearTimeout(contentDelay);
            clearTimeout(navButtonsDelay);
          };
        });

        await new Promise(resolve => {
          const buttonTimer = setTimeout(() => {
            setButtonsVisible(true);
            resolve(null);
          }, baseDelay * 6);

          return () => {
            clearTimeout(buttonTimer);
          };
        });
      };
  
      const initialDelay = setTimeout(animationSequence, 200);
  
      return () => {
        clearTimeout(initialDelay);
      };
    }
  }, [
    isVisible, 
    title.length, 
    description.length, 
    technologies.length, 
    animateTechnologies
  ]);

  return {
    showTitle,
    showDescription,
    showReadMore,
    titleFinished,
    descriptionFinished,
    readMoreFinished,
    showTechnologies,
    currentTechIndex,
    technologiesFinished,
    showImage,
    showContent,
    showNavButtons,
    buttonsVisible,
  };
};