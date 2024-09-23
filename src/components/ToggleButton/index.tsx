import React from 'react';
import useThemeContext from '../../hooks/useThemeContext';
import './styles.css';

const ToggleButton: React.FC = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <button className="toggle-button" onClick={toggleTheme}>
      light/dark
    </button>
  );
};

export default ToggleButton;
