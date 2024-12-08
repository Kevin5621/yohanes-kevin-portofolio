import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'AI Image Generator',
      description: 'Generate unique images using machine learning algorithms.',
      image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?auto=format&fit=crop&q=80&w=1000',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting with interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Featured Projects</h2>
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