import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import NotFound from '.';
import React from 'react';

test('renders correct text', () => {
  render(<NotFound />);

  const heading = screen.getByText('404 - Not Found');
  expect(heading).not.toBeNull();

  const paragraph = screen.getByText(
    'The page you are looking for does not exist.',
  );
  expect(paragraph).not.toBeNull();
});
