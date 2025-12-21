import React, { useEffect, useState, useRef } from 'react';
import { Typewriter } from './hooks/Animated_typeWritter';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from './ProjectCard/hooks/AnimatedButton';

interface ProjectsProps {
  isVisible: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isVisible }) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState<'all' | 'real' | 'playground'>('all');
  const [tabsVisible, setTabsVisible] = useState(false);
  const [allTabVisible, setAllTabVisible] = useState(false);
  const [realTabVisible, setRealTabVisible] = useState(false);
  const [playgroundTabVisible, setPlaygroundTabVisible] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

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
      
      const tabsTimer = setTimeout(() => {
        setTabsVisible(true);
      }, 1500);

      // Animasi tab muncul satu per satu
      const allTabTimer = setTimeout(() => {
        setAllTabVisible(true);
      }, 1600);

      const realTabTimer = setTimeout(() => {
        setRealTabVisible(true);
      }, 1800);

      const playgroundTabTimer = setTimeout(() => {
        setPlaygroundTabVisible(true);
      }, 2000);

      const projectTimers: ReturnType<typeof setTimeout>[] = [];

      projects.forEach((_, index) => {
        const timer = setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, 2200 + (index * 500));
        projectTimers.push(timer);
      });

      return () => {
        clearTimeout(sectionTimer);
        clearTimeout(titleTimer);
        clearTimeout(tabsTimer);
        clearTimeout(allTabTimer);
        clearTimeout(realTabTimer);
        clearTimeout(playgroundTabTimer);
        projectTimers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [isVisible]);

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => {
    if (activeTab === 'all') return true;
    return project.type === activeTab;
  });

  // Split filtered projects into left and right columns
  const leftColumnProjects = filteredProjects.filter((_, index) => index % 2 === 0);
  const rightColumnProjects = filteredProjects.filter((_, index) => index % 2 === 1);
  
  // Get project index in the original array
  const getOriginalIndex = (project: typeof projects[0]) => {
    return projects.findIndex(p => p.title === project.title);
  };

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
        
        {/* Tabs */}
        <div 
          className={`flex justify-center mb-12 transition-all duration-500 ${tabsVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'}`}
          ref={tabsContainerRef}
        >
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 sm:gap-6">
            <div className="w-48 sm:w-auto">
              <AnimatedButton 
                text="All Projects" 
                delay={0}
                buttonVisible={allTabVisible}
                onClick={() => setActiveTab('all')}
                icon={null}
                variant={activeTab === 'all' ? 'default' : 'subtle'}
                isActive={activeTab === 'all'}
                parentRef={tabsContainerRef}
              />
            </div>
            <div className="w-48 sm:w-auto">
              <AnimatedButton 
                text="Real Projects" 
                delay={0}
                buttonVisible={realTabVisible}
                onClick={() => setActiveTab('real')}
                icon={null}
                variant={activeTab === 'real' ? 'default' : 'subtle'}
                isActive={activeTab === 'real'}
                parentRef={tabsContainerRef}
              />
            </div>
            <div className="w-48 sm:w-auto">
              <AnimatedButton 
                text="Playground" 
                delay={0}
                buttonVisible={playgroundTabVisible}
                onClick={() => setActiveTab('playground')}
                icon={null}
                variant={activeTab === 'playground' ? 'default' : 'subtle'}
                isActive={activeTab === 'playground'}
                parentRef={tabsContainerRef}
              />
            </div>
          </div>
        </div>
        
        {/* Desktop Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="hidden md:grid md:grid-cols-2 gap-8"
          >
            {/* Left Column */}
            <div className="space-y-8">
              {leftColumnProjects.map((project, index) => {
                const originalIndex = getOriginalIndex(project);
                return (
                  <div 
                    key={project.title}
                    className="transition-all duration-500"
                  >
                    <ProjectCard 
                      {...project} 
                      index={index * 2} 
                      isVisible={visibleProjects.includes(originalIndex)}
                      typewriterDelay={0}
                      theme={theme}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {rightColumnProjects.map((project, index) => {
                const originalIndex = getOriginalIndex(project);
                return (
                  <div 
                    key={project.title}
                    className="transition-all duration-500"
                  >
                    <ProjectCard 
                      {...project} 
                      index={index * 2 + 1} 
                      isVisible={visibleProjects.includes(originalIndex)}
                      typewriterDelay={0}
                      theme={theme}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab + "-mobile"}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden space-y-8"
          >
            {filteredProjects.map((project, index) => {
              const originalIndex = getOriginalIndex(project);
              return (
                <div 
                  key={project.title}
                  className="transition-all duration-500"
                >
                  <ProjectCard 
                    {...project} 
                    index={index} 
                    isVisible={visibleProjects.includes(originalIndex)}
                    typewriterDelay={0}
                    theme={theme}
                  />
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;