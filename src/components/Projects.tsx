import React, { useEffect, useState } from 'react';
import { Typewriter } from './hooks/Animated_typeWritter';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { projects } from '../data/projects';

interface ProjectsProps {
  isVisible: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isVisible }) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only start animations when section becomes visible
    if (isVisible) {
      const sectionTimer = setTimeout(() => {
        setSectionVisible(true);
      }, 500);

      const titleTimer = setTimeout(() => {
        setTitleVisible(true);
      }, 1000);

      const projectTimers: ReturnType<typeof setTimeout>[] = [];

      projects.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, 2000 + (index * 500));
        projectTimers.push(timer);
      });

      return () => {
        clearTimeout(sectionTimer);
        clearTimeout(titleTimer);
        projectTimers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [isVisible]);

  // Split projects into left and right columns
  const leftColumnProjects = projects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = projects.filter((_, index) => index % 2 === 1);
  
  return (
    <section 
      id="projects" 
      className={`py-20 px-6 bg-gray-100 dark:bg-dark transition-all duration-1000
        ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          {titleVisible && (
            <Typewriter 
              text="Featured Projects"
              delay={0}
              className="text-4xl font-bold text-gray-800 dark:text-gray-100"
            />
          )}
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftColumnProjects.map((project, index) => (
              <div 
                key={project.title}
                className="transition-all duration-500"
              >
                <ProjectCard 
                  {...project} 
                  index={index * 2} 
                  isVisible={visibleProjects.includes(index * 2)}
                  typewriterDelay={0}
                  theme={theme}
                />
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {rightColumnProjects.map((project, index) => (
              <div 
                key={project.title}
                className="transition-all duration-500"
              >
                <ProjectCard 
                  {...project} 
                  index={index * 2 + 1} 
                  isVisible={visibleProjects.includes(index * 2 + 1)}
                  typewriterDelay={0}
                  theme={theme}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="transition-all duration-500"
            >
              <ProjectCard 
                {...project} 
                index={index} 
                isVisible={visibleProjects.includes(index)}
                typewriterDelay={0}
                theme={theme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;