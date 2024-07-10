import React from 'react';
import './styles.css';

const Loader: React.FC = (): JSX.Element => {
  return (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
