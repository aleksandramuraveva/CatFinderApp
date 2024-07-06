import React from 'react';
import './styles.css';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Record<string, never>, State> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Caught error:', error.message, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="fallback-container">
          <h1 className="fallback-text">An error has occurred!</h1>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;