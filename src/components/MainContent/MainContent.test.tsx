import { test, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MainContent from '.';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../contexts/themeContext.tsx';

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve([{ name: 'Test Actress', id: '1' }]),
//   }),
// );

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve([{ name: 'Test Actress', id: '1' }]),
  } as Response),
);

test('renders MainContent and performs search', async ({ expect }) => {
  render(
    <Router>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </Router>,
  );

  const loader = screen.getByRole('loader');
  expect(loader).to.exist;

  await waitFor(() => expect(screen.getByText('Test Actress')).to.exist);

  const searchBox = screen.getByRole('textbox');
  fireEvent.change(searchBox, {
    target: { value: 'Test Actress' },
  });
  const searchButton = screen.getByRole('button', { name: /search/i });
  fireEvent.click(searchButton);

  await waitFor(() => expect(screen.getByText('Test Actress')).to.exist);
});
