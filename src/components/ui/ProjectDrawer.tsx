'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectData {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  link: string;
  features?: string[];
  client?: string;
  duration?: string;
  year?: string;
}

interface ProjectDrawerProps {
  lang?: string;
}

const ProjectDrawer = ({ lang = 'en' }: ProjectDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<ProjectData | null>(null);

  const labels = {
    en: {
      close: 'Close',
      viewLive: 'View Live Project',
      technologies: 'Technologies',
      features: 'Key Features',
      client: 'Client',
      duration: 'Duration',
      year: 'Year',
      overview: 'Project Overview',
    },
    id: {
      close: 'Tutup',
      viewLive: 'Lihat Proyek Live',
      technologies: 'Teknologi',
      features: 'Fitur Utama',
      client: 'Klien',
      duration: 'Durasi',
      year: 'Tahun',
      overview: 'Gambaran Proyek',
    },
  };

  const t = labels[lang as keyof typeof labels] || labels.en;

  useEffect(() => {
    const handleOpenDrawer = (e: CustomEvent) => {
      setProject(e.detail);
      setIsOpen(true);
      // Prevent scroll on body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    };

    const handleCloseDrawer = () => {
      setIsOpen(false);
      // Reset body styles
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };

    window.addEventListener('open-project-drawer', handleOpenDrawer as EventListener);
    window.addEventListener('close-project-drawer', handleCloseDrawer);

    return () => {
      window.removeEventListener('open-project-drawer', handleOpenDrawer as EventListener);
      window.removeEventListener('close-project-drawer', handleCloseDrawer);
      // Ensure body is always reset on cleanup
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Reset body styles
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-background border-l border-border/50 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border/50">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
                aria-label={t.close}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto h-[calc(100%-88px)] p-6">
              {/* Project Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.client && (
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{t.client}</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                )}
                {project.duration && (
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{t.duration}</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                )}
                {project.year && (
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{t.year}</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">{t.overview}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">{t.features}</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">{t.technologies}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-secondary/50 text-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-base font-bold text-white bg-brand rounded-full hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 transition-all duration-200"
                >
                  {t.viewLive}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDrawer;
