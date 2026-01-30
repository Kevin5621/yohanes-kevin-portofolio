import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-[#d2d2d7] bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <p className="text-[#86868b] font-medium text-sm">
          Currently open to full-time or contract opportunities as a web developer.
        </p>
        
        <div className="flex gap-8">
            <a 
              href="https://github.com/Kevin5621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d1d1f] hover:text-[#0066cc] transition-colors font-semibold text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/yohanes-kevin-handoko-437514155/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d1d1f] hover:text-[#0066cc] transition-colors font-semibold text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:yohaneskevin21@gmail.com"
              className="text-[#1d1d1f] hover:text-[#0066cc] transition-colors font-semibold text-sm"
            >
              Email
            </a>
        </div>
      </div>
    </footer>
  );
};
