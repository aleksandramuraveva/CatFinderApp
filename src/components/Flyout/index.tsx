import React from 'react';
import './styles.css';

// interface FlyoutProps {

// }

const Flyout: React.FC /*<>*/ = () => {
  // let selectedItems = ["Margo", "Anna"];

  return (
    <div className="flyout-container">
      <div className="selected-items-info">
        <p>3 actresses are selected</p>
      </div>
      <div className="flyout-buttons">
        <button className="unselect-all-button">Unselect all</button>
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default Flyout;
