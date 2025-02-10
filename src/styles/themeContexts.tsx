/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get initial theme from localStorage
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  // Sync with system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setThemeAndUpdate(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update theme without transitions
  const updateTheme = useCallback((newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      // Remove any existing transition classes
      document.documentElement.classList.remove('theme-transition');
      
      // Update theme
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      
      // Save to localStorage
      localStorage.setItem('theme', newTheme);
    }
  }, []);

  // Update theme state and DOM
  const setThemeAndUpdate = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    updateTheme(newTheme);
  }, [updateTheme]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeAndUpdate(newTheme);
  }, [theme, setThemeAndUpdate]);

  // Sync theme with localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && savedTheme !== theme) {
      setThemeAndUpdate(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: setThemeAndUpdate }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}