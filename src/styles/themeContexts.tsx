import React, { createContext, useContext, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Only check localStorage if we're in the browser
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  // Immediately update theme without transitions
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