import React, { useState, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, GithubIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { ImageViewer } from '../helper/ImageViewer';
import { ProjectFeatures } from './types';

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
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  features,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % image.length);
  }, [image.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + image.length) % image.length);
  }, [image.length]);

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

      <div className="card rounded-2xl bg-gray-100 dark:bg-dark p-6 relative 
                    shadow-neumorph dark:shadow-neumorph-dark 
                    hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover 
                    transition-all duration-300 hover:scale-[1.02] h-fit">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
          
          {features && (
            <>
              <div className={`transition-all duration-300 overflow-hidden
                           ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 gap-4">
                  {features.sections.map((section, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-medium text-gray-700 dark:text-gray-200">
                        {section.title}
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 
                         dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
              >
                {isExpanded ? (
                  <>Show less <ChevronUpIcon size={16} /></>
                ) : (
                  <>Read more <ChevronDownIcon size={16} /></>
                )}
              </button>
            </>
          )}
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full shadow-neumorph-inset 
                         dark:shadow-neumorph-dark-inset text-gray-600 dark:text-gray-300 
                         bg-gray-100 dark:bg-dark"
              >
                {tech}
              </span>
            ))}
          </div>

          {image && image.length > 0 && (
            <div className="relative">
              <div className="rounded-lg bg-gray-100 dark:bg-dark shadow-neumorph-inset 
                          dark:shadow-neumorph-dark-inset p-2 h-[300px]">
                <div 
                  className="relative h-full rounded-lg overflow-hidden group"
                  onClick={() => setIsFullscreen(true)}
                >
                  <img
                    src={image[currentImageIndex].image}
                    alt={image[currentImageIndex].title}
                    className="w-full h-full object-contain cursor-pointer"
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

          <div>
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
        </div>
      </div>
    </>
  );
};