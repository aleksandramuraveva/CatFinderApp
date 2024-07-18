import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import ErrorBoundary from '.';

const ChildComponent = () => {
  throw new Error('Test error');
};

test('displays an error message if child component throws an error', async () => {
  render(
    <ErrorBoundary>
      <ChildComponent />
    </ErrorBoundary>
  );

  const errorMessage = await screen.findByText('An error has occurred!');
  expect(errorMessage).to.exist;
});