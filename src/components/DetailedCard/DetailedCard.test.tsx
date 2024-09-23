import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DetailedCard from '.';
import { ThemeProvider } from '../../contexts/themeContext.tsx';
import { Actress } from '../../types';

const mockActress: Actress = {
  id: 1,
  name: 'Actress 1',
  image: 'image1.jpg',
  birth_year: 1980,
  nationality: 'American',
  most_famous_movies: ['Movie 1', 'Movie 2'],
  awards: 'Award 1',
  biography: 'Biography 1',
};

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(mockActress),
//   }),
// );

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockActress),
  } as Response),
);

test('displays a loading indicator while fetching data', async () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <DetailedCard actress={mockActress} setSelectedActress={() => {}} />
      </ThemeProvider>
    </BrowserRouter>,
  );

  const loaderElement = screen.getByRole('loader');

  expect(loaderElement).to.exist;
});

test('renders the relevant card data', async () => {
  render(
    <BrowserRouter>
      <ThemeProvider>
        <DetailedCard actress={mockActress} setSelectedActress={() => {}} />
      </ThemeProvider>
    </BrowserRouter>,
  );

  const nameElement = screen.findByText(mockActress.name);
  const birthYearElement = screen.findByText(
    `Birth Year: ${mockActress.birth_year}`,
  );
  const nationalityElement = screen.findByText(
    `Nationality: ${mockActress.nationality}`,
  );

  expect(nameElement).to.exist;
  expect(birthYearElement).to.exist;
  expect(nationalityElement).to.exist;
});
