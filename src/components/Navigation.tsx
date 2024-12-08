import React from 'react';
import { MenuIcon, XIcon, GithubIcon, LinkedinIcon, FileTextIcon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-100 shadow-sm z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-700">JD</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg shadow-neumorph active:shadow-neumorph-inset"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <SocialLinks />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-100 p-4 md:hidden shadow-neumorph">
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
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        {item}
      </a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <GithubIcon size={20} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <LinkedinIcon size={20} />
    </a>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <FileTextIcon size={20} />
    </a>
  </div>
);

export default Navigation;