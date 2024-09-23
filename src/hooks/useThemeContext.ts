import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from '../contexts/themeContext';

const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export default useThemeContext;
