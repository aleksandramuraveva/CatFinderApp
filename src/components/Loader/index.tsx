import React from 'react';
import './styles.css';

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }
}

export default Loader;