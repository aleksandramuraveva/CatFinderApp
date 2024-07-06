import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      {' '}
      {/* Wrap App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
