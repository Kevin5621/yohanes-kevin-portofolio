import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { ImageViewer } from '../helper/ImageViewer';
import { ProjectFeatures } from './types';
import { Typewriter } from '../hook/Animated_typeWritter';
import { cardHover } from '../hook/getCard';

interface ProjectImage {
  image: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  image: ProjectImage[];
  technologies: string[];
  githubUrl: string;
  features?: ProjectFeatures;
}

interface ProjectCardProps extends Project {
  index: number;
  isVisible: boolean;
  typewriterDelay: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  features,
  isVisible,
  typewriterDelay
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [currentTechIndex, setCurrentTechIndex] = useState(-1);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');
  const [, setIsAnimating] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + ' ...';
  };

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
  }, [isExpanded, features]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setCardVisible(true);
      }, 100);

      // Sequential animations
      setTimeout(() => {
        setShowTitle(true);
      }, typewriterDelay);

      setTimeout(() => {
        setShowDescription(true);
      }, typewriterDelay + title.length * 50 + 500);

      setTimeout(() => {
        setShowReadMore(true);
        animateTechnologies();
      }, typewriterDelay + title.length * 50 + description.length * 30 + 1000);

      setTimeout(() => {
        setShowTechnologies(true);
      }, typewriterDelay + title.length * 50 + description.length * 30 + 1500);

      setTimeout(() => {
        setShowImage(true);
      }, typewriterDelay + title.length * 50 + description.length * 30 + technologies.length * 500 + 2000);

      const imageDelay = typewriterDelay + title.length * 50 + description.length * 30 + technologies.length * 500 + 2500;
      setTimeout(() => {
        setShowGithub(true);
        setShowNavButtons(true);
        setShowContent(true);
      },imageDelay,);
    }
  });

  const animateTechnologies = useCallback(() => {
    if (technologies.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < technologies.length) {
          setCurrentTechIndex(index);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 500);
    }
  }, [technologies]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.card');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight / 2 + rect.height / 2;
        
        const progress = Math.min(distance / maxDistance, 1);
        setScrollProgress(progress);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  }, [image.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  }, [image.length]);

  const cardStyle = cardHover(cardVisible, scrollProgress, isHovered)();

  return (
    <>
      {isFullscreen && (
        <ImageViewer
          images={image}
          currentIndex={currentImageIndex}
          onClose={() => setIsFullscreen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      
      <div className={`opacity-0 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : ''}`}>
        <div 
          className={`card rounded-2xl bg-gray-100 dark:bg-dark p-4 relative overflow-hidden h-full
            transition-all duration-700 ease-in-out`}
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col h-full">
            {/* Fixed Height Top Section */}
            <div className="min-h-[120px]">
              {/* Title */}
              <h3 className={`text-xl font-semibold text-gray-800 dark:text-gray-100 h-7 mb-3 transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                {isVisible && (
                  <Typewriter 
                    text={title}
                    delay={typewriterDelay}
                    className="inline"
                  />
                )}
              </h3>

              {/* Description */}
              <div className={`transition-all duration-500 ${showDescription ? 'opacity-100' : 'opacity-0'}`}>
                {isVisible && (
                  <Typewriter
                    text={isExpanded ? description : truncateDescription(description, 300)}
                    delay={typewriterDelay + title.length * 50 + 500}
                    speed={30}
                    className="text-gray-600 dark:text-gray-300"
                  />
                )}
              </div>
            </div>

            {/* Read More Section - Fixed Height */}
            <div className="h-[40px] flex items-center">
              {(description.length > 150 || features) && (
                <div className={`transition-all duration-500 ${showReadMore ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 
                             dark:hover:text-gray-200 flex items-center gap-1"
                  >
                    {isVisible && (
                      <Typewriter
                        text={isExpanded ? "Show less" : "Read more"}
                        delay={typewriterDelay + title.length * 50 + description.length * 30 + 1000}
                        className="flex items-center gap-1"
                      />
                    )}
                    {isExpanded ? (
                      <ChevronUpIcon className="transform transition-transform duration-500" size={16} />
                    ) : (
                      <ChevronDownIcon className="transform transition-transform duration-500" size={16} />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Features Content - Expandable */}
            <div
              ref={contentRef}
              style={{
                maxHeight: contentHeight,
                transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden'
              }}
              className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
            >
              {features && (
                <div className="grid grid-cols-1 gap-2 py-2">
                  {features.sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="space-y-1"
                      style={{
                        transform: `translateY(${isExpanded ? '0' : '10px'})`,
                        opacity: isExpanded ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1}s`
                      }}
                    >
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">
                        {section.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                        {section.items.map((item, itemIdx) => (
                          <li 
                            key={itemIdx}
                            style={{
                              transform: `translateY(${isExpanded ? '0' : '5px'})`,
                              opacity: isExpanded ? 1 : 0,
                              transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${(idx * 0.1 + itemIdx * 0.05)}s`
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Technologies Section - Fixed Height */}
            <div className="h-[60px] flex items-center">
              <div className={`w-full transition-all duration-500 ${showTechnologies ? 'opacity-100' : 'opacity-0'}`}>
                {isVisible && (
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech, idx) => (
                      <div
                        key={tech}
                        className={`px-3 py-1 text-sm rounded-full text-gray-600 dark:text-gray-300 
                                  bg-gray-100 dark:bg-dark transition-all duration-500
                                  ${idx <= currentTechIndex ? 'shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : ''}`}
                      >
                        <Typewriter
                          text={tech}
                          delay={typewriterDelay + title.length * 50 + description.length * 30 + 1500 + idx * 500}
                          className="inline"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section with Fixed Heights */}
            <div className="mt-auto">
              {/* Image Section - Fixed Height */}
              <div className="h-[200px] mb-4">
                {image && image.length > 0 && isVisible && (
                  <div className="relative h-full">
                    <div className={`rounded-lg bg-gray-100 dark:bg-dark p-2 h-full
                                  transition-all duration-500
                                  ${showImage ? 'shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : ''}`}>
                      <div 
                        className={`relative h-full rounded-lg overflow-hidden cursor-pointer
                                  transition-opacity duration-500
                                  ${showContent ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setIsFullscreen(true)}
                      >
                        <img
                          src={image[currentImageIndex].image}
                          alt={image[currentImageIndex].title}
                          className="w-full h-full object-contain"
                        />
                        <p className="absolute bottom-2 left-2 text-sm text-gray-600 dark:text-gray-300 
                                    bg-white/80 dark:bg-black/80 px-2 py-1 rounded">
                          {image[currentImageIndex].title} ({currentImageIndex + 1}/{image.length})
                        </p>
                      </div>
                    </div>

                    {image.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10
                                   flex items-center justify-center transition-all duration-500
                                   ${showNavButtons ? 'opacity-80 hover:opacity-100' : 'opacity-0'}`}
                        >
                          <ChevronLeftIcon size={20} className="text-gray-600 dark:text-gray-300" />
                        </button>
                        <button
                          onClick={handleNext}
                          className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10
                                   flex items-center justify-center transition-all duration-500
                                   ${showNavButtons ? 'opacity-80 hover:opacity-100' : 'opacity-0'}`}
                        >
                          <ChevronRightIcon size={20} className="text-gray-600 dark:text-gray-300" />
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* GitHub Button - Fixed Height */}
              <div className="h-[40px] flex items-center">
                <div className={`transition-all duration-500 ${showGithub ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`}>
                  {isVisible && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph 
                               dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                               dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset 
                               dark:active:shadow-neumorph-dark-inset transition-all duration-200 
                               text-gray-600 dark:text-gray-300 hover:scale-105"
                    >
                      <GithubIcon size={16} />
                      <Typewriter
                        text="View on GitHub"
                        delay={typewriterDelay + title.length * 50 + description.length * 30 + technologies.length * 500 + 2500}
                        className="inline"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};