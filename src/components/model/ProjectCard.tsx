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
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + ' ...';
  };

  useEffect(() => {
    if (contentRef.current) {
      const height = isExpanded ? `${contentRef.current.scrollHeight}px` : '0px';
      setContentHeight(height);
    }
  }, [isExpanded, features]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setCardVisible(true);
      }, 100);

      // Delayed animations for content sections
      setTimeout(() => {
        setShowContent(true);
      }, typewriterDelay + 1000);
      
      setTimeout(() => {
        setShowTechnologies(true);
      }, typewriterDelay + 1500);

      setTimeout(() => {
        setShowImage(true);
      }, typewriterDelay + 2000);
    }
  }, [isVisible, typewriterDelay]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
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
          className={`card rounded-2xl bg-gray-100 dark:bg-dark p-4 relative 
            transition-all duration-700 ease-in-out
            ${isExpanded ? 'min-h-[700px]' : 'h-[520px]'}
                    ${!cardVisible ? 'shadow-none' : ''}`}
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col h-full space-y-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 h-7">
              {isVisible && (
                <Typewriter 
                  text={title}
                  delay={typewriterDelay}
                  className="inline"
                />
              )}
            </h3>

            {/* Description */}
            <div className="transition-all duration-700 ease-in-out">
              {isVisible && (
                <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-gray-600 dark:text-gray-300">
                    {isExpanded ? description : truncateDescription(description, 300)}
                  </p>
                </div>
              )}
            </div>

            {/* Features */}
            {features && (
              <div
                ref={contentRef}
                style={{
                  maxHeight: contentHeight,
                  transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden'
                }}
                className="transition-all duration-500 ease-in-out"
              >
                <div className="grid grid-cols-1 gap-2 py-2">
                  {isVisible && features.sections.map((section, idx) => (
                    <div 
                      key={idx} 
                      className="space-y-1"
                      style={{
                        opacity: isExpanded ? 1 : 0,
                        transform: `translateY(${isExpanded ? '0' : '10px'})`,
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
                              opacity: isExpanded ? 1 : 0,
                              transform: `translateY(${isExpanded ? '0' : '5px'})`,
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
              </div>
            )}

            {/* Read More Button */}
            {(description.length > 150 || features) && isVisible && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 
                         dark:hover:text-gray-200 flex items-center gap-1
                         transition-all duration-300 ease-in-out transform
                         ${showContent ? 'opacity-100' : 'opacity-0'}`}
              >
                {isExpanded ? (
                  <>Show less <ChevronUpIcon className="transition-transform duration-300" size={16} /></>
                ) : (
                  <>Read more <ChevronDownIcon className="transition-transform duration-300" size={16} /></>
                )}
              </button>
            )}

            {/* Bottom Section: Technologies, Image, GitHub */}
            <div>
              {isVisible && (
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech, idx) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full 
                               text-gray-600 dark:text-gray-300 
                               bg-gray-100 dark:bg-dark
                               transition-all duration-500
                               ${showTechnologies ? 'shadow-neumorph-inset dark:shadow-neumorph-dark-inset' : ''}
                               ${showContent ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

              {/* Image */}
              <div className="h-[250px]">
              {image && image.length > 0 && isVisible && (
                <div className="relative h-full mt-2">
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
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10
                                 flex items-center justify-center opacity-80 hover:opacity-100
                                 transition-opacity duration-200"
                      >
                        <div className="rounded-full p-2 bg-gray-100 dark:bg-dark shadow-neumorph 
                                    dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                                    dark:hover:shadow-neumorph-dark-hover">
                          <ChevronLeftIcon size={20} className="text-gray-600 dark:text-gray-300" />
                        </div>
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10
                                 flex items-center justify-center opacity-80 hover:opacity-100
                                 transition-opacity duration-200"
                      >
                        <div className="rounded-full p-2 bg-gray-100 dark:bg-dark shadow-neumorph 
                                    dark:shadow-neumorph-dark hover:shadow-neumorph-hover 
                                    dark:hover:shadow-neumorph-dark-hover">
                          <ChevronRightIcon size={20} className="text-gray-600 dark:text-gray-300" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

              {/* GitHub Link */}
            <div>
              {isVisible && (
                <div className={`transition-all duration-500 mt-2 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
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
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};