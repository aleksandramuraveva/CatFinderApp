import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResultsList from '.';
import { Actress } from '../../types';

const mockActresses: Actress[] = [
  { 
    id: '1', 
    name: 'Actress 1', 
    image: 'image1.jpg', 
    birth_year: 1980, 
    nationality: 'American' 
  },
  { 
    id: '2', 
    name: 'Actress 2', 
    image: 'image2.jpg', 
    birth_year: 1985, 
    nationality: 'British' 
  },
];

test('renders the specified number of cards', async () => {
  render(
    <BrowserRouter>
      <ResultsList actresses={mockActresses} />
    </BrowserRouter>
  );

  const resultItems = await screen.findAllByRole('listitem');
  expect(resultItems).toHaveLength(mockActresses.length);
});

test('displays a message if no cards are present', async () => {
  render(
    <BrowserRouter>
      <ResultsList actresses={[]} />
    </BrowserRouter>
  );

  const noResultsMessage = screen.getByText(/No actresses found/i);
  expect(noResultsMessage).to.exist;
});
