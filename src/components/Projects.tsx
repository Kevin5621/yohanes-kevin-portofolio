import React, { useEffect, useState } from 'react';
import { ProjectCard } from './model/ProjectCard';
import { Project } from './model/types';
import { Typewriter } from './hook/Animated_typeWritter';
import { SmartIrrigationImages, SitamaImages } from './model/images';

const projects: Project[] = [
  {
    title: 'Sitama',
    description: 'Education Platform that helps simplify internship management for students and lecturers at Politeknik Negeri Semarang. Features a dual-role system with specific functionalities for both students and supervising lecturers.',
    technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/Kevin5621/Sitama',
    features: {
      sections: [
        {
          title: 'Student Features',
          items: [
            'Submit and track internship progress',
            'Maintain digital logbook',
            'Schedule and manage guidance sessions',
            'Upload reports and documentation',
            'View feedback and scores'
          ]
        },
        {
          title: 'Lecturer Features',
          items: [
            'Review student submissions',
            'Provide feedback on logbook entries',
            'Manage guidance schedules',
            'Assess student performance',
            'Generate progress reports'
          ]
        }
      ]
    },
    image: [
      { 
        title: 'banner', 
        image: SitamaImages.SbannerLight,
        bannerLight: SitamaImages.SbannerLight,
        bannerDark: SitamaImages.SbannerDark
      },
      { title: 'Login', image: SitamaImages.login },
      { title: 'Dashboard Student', image: SitamaImages.homeMahasiswa },
      { title: 'Guidance', image: SitamaImages.bimbingan },
      { title: 'Logbook Page', image: SitamaImages.logbook },
      { title: 'Add Guidance', image: SitamaImages.addBimbingan },
      { title: 'Profile', image: SitamaImages.profile },
      { title: 'Dashboard Lecturer', image: SitamaImages.homeDosen },
      { title: 'Detail Student', image: SitamaImages.detailStudent },
      { title: 'Guidance Action', image: SitamaImages.actionBimbingan },
      { title: 'Score Page', image: SitamaImages.detailNilai }
    ]
  },
  {
    title: 'IoT Smart Irrigation System',
    description: 'An IoT-based smart irrigation system that automates watering plants based on schedules or soil moisture thresholds. It also supports manual control for flexibility.',
    technologies: ['Dart', 'MQTT', 'ESP32', 'Soil Moisture Sensor', 'Relay Module'],
    githubUrl: 'https://github.com/Kevin5621/iot_smart_irigation',
    features: {
      sections: [
        {
          title: 'Core Features',
          items: [
            'Automated watering based on predefined schedules',
            'Real-time soil moisture monitoring with threshold-based triggering',
            'Manual watering control via mobile app or web interface',
            'Data logging and visualization of soil moisture levels',
            'Integration with MQTT for real-time communication'
          ]
        },
        {
          title: 'Hardware Components',
          items: [
            'ESP32 microcontroller for processing and connectivity',
            'Soil moisture sensor for detecting water levels',
            'Relay module to control water pump',
            'Water pump for irrigation',
            'Power supply and wiring setup'
          ]
        }
      ]
    },
    image: [
      { 
        title: 'banner', 
        image: SmartIrrigationImages.BbannerLight,
        bannerLight: SmartIrrigationImages.BbannerLight,
        bannerDark: SmartIrrigationImages.BbannerDark
      },
      { title: 'System Overview ON', image: SmartIrrigationImages.systemOverviewON },
      { title: 'System Overview OFF', image: SmartIrrigationImages.systemOverviewOFF },
      { title: 'Control Interface', image: SmartIrrigationImages.controlInterface },
      { title: 'Add Schedule', image: SmartIrrigationImages.scheduleInterface },
      { title: 'Schedule', image: SmartIrrigationImages.dataVisualization },
      { title: 'Hardware Setup', video: SmartIrrigationImages.hardwareSetup }
    ]
  }
];

interface ProjectsProps {
  isVisible: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isVisible }) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

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
        }, 2000 + (index * 500)); // Adjusted timing for smoother animation
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
                
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;