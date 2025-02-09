import { useState } from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import ThemeToggle from '../styles/theme';
import { ImageViewer } from './helper/ImageViewer';
import profilePhoto from '@/public/assets/profile/foto.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const profileImage = {
    image: profilePhoto,
    title: 'Profile Picture',
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollProgress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(scrollProgress);
        window.scrollTo(0, startPosition + distance * ease);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
    // Close mobile menu after clicking a link
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-dark shadow-sm z-50 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700"
          onClick={() => setIsViewerOpen(true)}
        >
          <img
            src={profileImage.image}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </button>

        {/* ImageViewer */}
        {isViewerOpen && (
          <ImageViewer
            images={[profileImage]}
            currentIndex={0}
            onClose={() => setIsViewerOpen(false)}
            onNext={() => {}}
            onPrev={() => {}}
          />
        )}

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks onNavigate={scrollToSection} />
            <SocialLinks />
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg shadow-neumorph dark:shadow-neumorph-dark active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XIcon size={24} className="dark:text-gray-200" />
            ) : (
              <MenuIcon size={24} className="dark:text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-100 dark:bg-dark p-4 md:hidden shadow-neumorph dark:shadow-neumorph-dark transition-colors duration-200">
            <div className="flex flex-col space-y-4">
              <NavLinks onNavigate={scrollToSection} />
              <div className="flex justify-center space-x-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ onNavigate }: { onNavigate: (id: string) => void }) => (
  <>
    {['Home', 'Projects', 'Contact'].map((item) => (
      <button
        key={item}
        onClick={() => onNavigate(item.toLowerCase())}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        {item}
      </button>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a
      href="https://github.com/Kevin5621"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <GithubIcon size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/yohanes-kevin-gilang-pratama-9711a1293/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <LinkedinIcon size={20} />
    </a>
  </div>
);

export default Navigation;