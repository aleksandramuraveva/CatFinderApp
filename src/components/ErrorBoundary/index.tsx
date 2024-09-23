import React, { ReactNode } from 'react';

import './styles.css';

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
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
