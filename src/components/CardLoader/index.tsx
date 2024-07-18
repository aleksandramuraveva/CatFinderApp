import React from 'react';
import './styles.css';

const CardLoader: React.FC = () => {
  return (
    <div role="loader" className="loader-container">
      <span className="loader"></span>
    </div>
  );
};

export default CardLoader;
