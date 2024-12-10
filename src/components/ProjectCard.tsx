import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) => {
  return (
    <div className="group rounded-2xl shadow-neumorph dark:shadow-neumorph-dark p-6 transition-all hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover bg-gray-100 dark:bg-dark">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full shadow-neumorph-inset dark:shadow-neumorph-dark-inset text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-dark"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow text-gray-600 dark:text-gray-300"
        >
          <ExternalLinkIcon size={16} />
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-neumorph dark:shadow-neumorph-dark hover:shadow-neumorph-hover dark:hover:shadow-neumorph-dark-hover active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset transition-shadow text-gray-600 dark:text-gray-300"
        >
          <GithubIcon size={16} />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;