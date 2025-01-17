// Projects.tsx
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ProjectCard } from './ProjectCard';
import { Project } from './types';

const projects: Project[] = [
  {
    title: 'Sitama1',
    description: 'Education Platform that help simplify internship students in Politeknik Negeri Semarang',
    technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/Kevin5621/Sitama',
    image: [
      { title: 'Login', image: 'src/components/assets/screenshot/login.jpg' },
      { title: 'Dashboard Student', image: 'src/components/assets/screenshot/homeMahasiswa.jpg' },
      { title: 'Guidance', image: 'src/components/assets/screenshot/bimbingan.jpg' },
      { title: 'Logbook Page', image: 'src/components/assets/screenshot/logbook.jpg' },
      { title: 'Add Guidance', image: 'src/components/assets/screenshot/addBimbingan.jpg' },
      { title: 'Profile', image: 'src/components/assets/screenshot/profile.jpg' },
      { title: 'Dashboard Lecturer', image: 'src/components/assets/screenshot/homeDosen.jpg' },
      { title: 'Detail Student', image: 'src/components/assets/screenshot/detailStudent.jpg' },
      { title: 'Guidance Action', image: 'src/components/assets/screenshot/actionBimbingan.jpg' },
      { title: 'Score Page', image: 'src/components/assets/screenshot/detailNilai.jpg' }
    ]
  },
  {
    title: 'Sitama2',
    description: 'Education Platform that help simplify internship students in Politeknik Negeri Semarang',
    technologies: ['Dart', 'Laravel', 'SQL', 'Firebase'],
    githubUrl: 'https://github.com/Kevin5621/Sitama',
    image: [
      { title: 'Login', image: 'src/components/assets/screenshot/login.jpg' },
      { title: 'Dashboard Student', image: 'src/components/assets/screenshot/homeMahasiswa.jpg' },
      { title: 'Guidance', image: 'src/components/assets/screenshot/bimbingan.jpg' },
      { title: 'Logbook Page', image: 'src/components/assets/screenshot/logbook.jpg' },
      { title: 'Add Guidance', image: 'src/components/assets/screenshot/addBimbingan.jpg' },
      { title: 'Profile', image: 'src/components/assets/screenshot/profile.jpg' },
      { title: 'Dashboard Lecturer', image: 'src/components/assets/screenshot/homeDosen.jpg' },
      { title: 'Detail Student', image: 'src/components/assets/screenshot/detailStudent.jpg' },
      { title: 'Guidance Action', image: 'src/components/assets/screenshot/actionBimbingan.jpg' },
      { title: 'Score Page', image: 'src/components/assets/screenshot/detailNilai.jpg' }
    ]
  },
];

export const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  
  const handleExpand = (index: number) => {
    setExpandedIndex(index);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
          Featured Projects
        </h2>
        <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <CSSTransition
              key={project.title}
              timeout={300}
              classNames="card-grid"
            >
              <ProjectCard
                {...project}
                index={index}
                isAnyCardExpanded={expandedIndex !== -1}
                onExpand={handleExpand}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  );
};