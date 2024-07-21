import React from 'react';
import './styles.css';
import {useContext} from 'react';
import { ThemeContext} from "../../contexts/themeContext.tsx";

const NotFound = () => {
	const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme} notfound-container`}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
