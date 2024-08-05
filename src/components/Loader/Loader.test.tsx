import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Loader from '.';

test('renders correctly', () => {
  render(<Loader />);

  const loader = screen.getByRole('loader');
  expect(loader).not.toBeNull();
});
