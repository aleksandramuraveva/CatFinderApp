import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext.tsx';
import App from './App';

test('renders the correct component based on the route', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>,
  );

  expect(screen.getByRole('main')).to.exist;

  render(
    <MemoryRouter initialEntries={['/details/1']}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>,
  );

  expect(await screen.findByRole('aside')).to.exist;

  render(
    <MemoryRouter initialEntries={['/non-existent-route']}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>,
  );

  expect(screen.getByText('404 - Not Found')).to.exist;
});
