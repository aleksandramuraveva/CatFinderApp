import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

type Theme = 'light' | 'dark';

// type ThemeContextType = {
//   theme: Theme;
//   toggleTheme: () => void;
// };

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
