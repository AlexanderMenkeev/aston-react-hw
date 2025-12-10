import React, { useContext, useState, type ReactNode } from 'react';

interface IThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkTheme, setTheme] = useState(false);
  function toggleTheme() {
    setTheme((prevTheme) => !prevTheme);
  }

  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
