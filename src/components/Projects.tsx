import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Sitama',
      description: 'Education Platform that help simplfy internship students in Politeknik Negri Semarang',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Flutter', 'Laravel', 'SQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Kevin5621/Sitama',
    },
    {
      title: 'NutriScan ID',
      description: 'Web that can help people to find the nutrition information of food',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;