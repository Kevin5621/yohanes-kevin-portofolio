import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const performThemeTransition = useCallback(async (newTheme: Theme) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Cast to HTMLElement
    const rootElement = document.querySelector('#root') as HTMLElement;
    if (rootElement) {
        rootElement.style.position = 'relative';
        rootElement.style.zIndex = '1';
    }
    
    const line = document.createElement('div');
    line.className = `theme-transition-line ${newTheme}`;
    document.body.appendChild(line);

    const wrapper = document.createElement('div');
    wrapper.className = `theme-wrapper ${newTheme}`;
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.clipPath = 'inset(0 100% 0 0)';
    wrapper.style.zIndex = '9998';
    
    const contentClone = document.querySelector('#root')?.cloneNode(true) as HTMLElement;
    if (contentClone) {
        contentClone.style.transition = 'none';
        contentClone.style.position = 'relative';
        contentClone.style.zIndex = '1';
        
        if (newTheme === 'dark') {
            contentClone.classList.add('dark');
        } else {
            contentClone.classList.remove('dark');
        }
        
        const allElements = contentClone.getElementsByTagName('*');
        Array.from(allElements).forEach((element) => {
            (element as HTMLElement).style.transition = 'none';
        });
        
        wrapper.appendChild(contentClone);
    }
    
    document.body.appendChild(wrapper);

    // Force a reflow dengan cara yang benar
    void wrapper.offsetHeight;

    requestAnimationFrame(() => {
        line.style.transform = 'translateX(100vw)';
        wrapper.style.clipPath = 'inset(0 0 0 0)';
    });

    await new Promise(resolve => setTimeout(resolve, 500));

    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setTheme(newTheme);

    if (rootElement) {
        rootElement.style.transition = '';
        const allOriginalElements = rootElement.getElementsByTagName('*');
        Array.from(allOriginalElements).forEach((element) => {
            (element as HTMLElement).style.transition = '';
        });
    }

    line.remove();
    wrapper.remove();
    setIsTransitioning(false);
}, [isTransitioning]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    performThemeTransition(newTheme);
  }, [theme, performThemeTransition]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}