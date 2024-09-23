import React from 'react';
import './styles.css';
import useThemeContext from '../../hooks/useThemeContext';

const NotFound = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`${theme} notfound-container`}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
