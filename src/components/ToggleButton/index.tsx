import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeContext.tsx';
import './styles.css';
import './styles.css';

const ToggleButton: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-button" onClick={toggleTheme}>
      light/dark
    </button>
  );
};

export default ToggleButton;
