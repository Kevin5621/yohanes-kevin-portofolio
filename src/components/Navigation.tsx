import React from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';
import ThemeToggle from '../styles/theme';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-100 dark:bg-dark shadow-sm z-50 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-700 dark:text-gray-200">
          YK
        </a>
        
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>
          
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg shadow-neumorph dark:shadow-neumorph-dark active:shadow-neumorph-inset dark:active:shadow-neumorph-dark-inset"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XIcon size={24} className="dark:text-gray-200" /> : <MenuIcon size={24} className="dark:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-100 dark:bg-dark p-4 md:hidden shadow-neumorph dark:shadow-neumorph-dark transition-colors duration-200">
            <div className="flex flex-col space-y-4">
              <NavLinks />
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

const NavLinks = () => (
  <>
    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com/Kevin5621" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <GithubIcon size={20} />
    </a>
    <a href="https://www.linkedin.com/in/yohanes-kevin-gilang-pratama-9711a1293/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <LinkedinIcon size={20} />
    </a>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
      <FileTextIcon size={20} />
    </a>
  </div>
);

export default Navigation;