import { render, screen } from '@testing-library/react';
import { test, expect, vi } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DetailedCard from '.';
import { ThemeProvider } from '../../contexts/themeContext.tsx';
import { Actress } from '../../types';

const mockActress: Actress = {
  id: 1,
  name: 'cat 1',
  image_link: 'image1.jpg',
  origin: 'American',
  length: 'Medium',
  min_weight: 8,
  max_weight: 15,
  min_life_expectancy: 12,
  max_life_expectancy: 15,
  family_friendly: 5,
  shedding: 3,
  general_health: 4,
  playfulness: 5,
  meowing: 2,
  children_friendly: 4,
  stranger_friendly: 3,
  grooming: 2,
  intelligence: 4,
  other_pets_friendly: 4,
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
const originElement = screen.findByText(
  `Origin: ${mockActress.origin}`,
);
const lengthElement = screen.findByText(
  `Length: ${mockActress.length}`,
);


  expect(nameElement).to.exist;
  expect(originElement).to.exist;
  expect(lengthElement).to.exist;
});
