import React from 'react';
import './styles.css';

class ErrorButton extends React.Component<{ onError: () => void }> {
  handleClick = () => {
    this.props.onError();
  };

  render() {
    return (
      <button className="error-button" onClick={this.handleClick}>
        Crash the app
      </button>
    );
  }
}

export default ErrorButton;